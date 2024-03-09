import json
import boto3
import uuid
from datetime import datetime


print('post lambda initialized')
TABLE_NAME = 'prep-masterclass-testimonials'

dynamodb = boto3.resource('dynamodb')

def lambda_handler(event, context):
    print('post lambda handler invoked')
    print(event)
    modify_event(event)
    write_testimonial(event)
    response = {'message': 'testimonial successfully submitted!'}
    return response
    
def modify_event(event):
    event['id'] = str(uuid.uuid4())
    event['created_at'] = str(datetime.now())
    event['is_active'] = True

def write_testimonial(payload):
    table = dynamodb.Table(TABLE_NAME)
    table.put_item(Item=payload)
    return True