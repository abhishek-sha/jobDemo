# -*- coding: utf-8 -*-
from flask import Blueprint
from flask_restful import Api, Resource
from models import Job
from flask import Flask, request, jsonify
from app import db
import json

job_api = Api(Blueprint('job_api', __name__)) # pylint: disable=invalid-name

@job_api.resource('/addjob')
class JobAPI(Resource):
    @staticmethod
    def get():
        jobs = Job.query
        jobs_data = [{
            'id': job.id,
            'created': job.created.isoformat() + 'Z',
            'title': job.title,
            'category': job.category,
            'company_name': job.company_name,
        } for job in jobs]

        return jobs_data[::-1]

    @staticmethod
    def post():
        request_json = request.get_json(force=True)
        request_json = json.loads(request_json)
        new_job = Job()
        new_job.title = request_json["title"]
        new_job.category = request_json["category"]
        new_job.headquaters = request_json["headquaters"]
        new_job.description = request_json["description"]
        new_job.how_to_Apply = request_json["how_to_Apply"]
        new_job.company_name = request_json["company_name"]
        new_job.email = request_json["email"]
        new_job.url = request_json["url"]
        new_job.tell_us_more = request_json["tell_us_more"]
        db.session.add(new_job)
        db.session.commit()

        return {
            'id': new_job.id,
            'created': new_job.created.isoformat() + 'Z'
        }