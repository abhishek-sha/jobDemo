# -*- coding: utf-8 -*-
from datetime import datetime

from app import db

class Job(db.Model):
    __tablename__ = 'job_post'

    id = db.Column(db.Integer, primary_key=True)
    created = db.Column(db.DateTime, default=datetime.utcnow)
    title = db.Column(db.String, default="")
    category = db.Column(db.String, default="")
    headquaters = db.Column(db.String, default="")
    description = db.Column(db.String, default="")
    how_to_apply = db.Column(db.String, default="")
    company_name = db.Column(db.String, default="")
    url = db.Column(db.String, default="")
    email = db.Column(db.String, default="")
    tell_us_more = db.Column(db.String, default="")