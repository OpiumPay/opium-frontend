from flask import Flask, request, jsonify
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://localhost:5000"])

# Configure MongoDB connection
client = MongoClient("mongodb+srv://shreyas:lUbNuqz6VricctyB@cluster0.1ygibls.mongodb.net/?retryWrites=true&w=majority")
db = client["course_db"]
courses_collection = db["courses"]

# API 1 - POST - /course
@app.route("/course", methods=["POST"])
def create_course():
    data = request.json
    if "courseName" in data and "coursePrice" in data:
        course = {
            "courseName": data["courseName"],
            "coursePrice": data["coursePrice"]
        }
        result = courses_collection.insert_one(course)
        return jsonify({"message": "Course created successfully", "id": str(result.inserted_id)}), 201
    else:
        return jsonify({"error": "Missing courseName or coursePrice in request data"}), 400

# API 2 - GET - /course/:id
@app.route("/course/<string:course_id>", methods=["GET"])
def get_course(course_id):
    course = courses_collection.find_one({"_id": ObjectId(course_id)})
    if course:
        return jsonify(course), 200
    else:
        return jsonify({"error": "Course not found"}), 404

def jsonify_course(course):
    course['_id'] = str(course['_id'])
    return course

@app.route("/courses", methods=["GET"])
def get_courses():
    all_courses = list(courses_collection.find({}))
    serialized_courses = [jsonify_course(course) for course in all_courses]
    return jsonify(serialized_courses), 200

# API 4 - DELETE - /course/:id
@app.route("/course/<string:course_id>", methods=["DELETE"])
def delete_course(course_id):
    result = courses_collection.delete_one({"_id": ObjectId(course_id)})
    if result.deleted_count == 1:
        return jsonify({"message": "Course deleted successfully"}), 200
    else:
        return jsonify({"error": "Course not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)

