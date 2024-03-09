import boto3
import json

print('get lambda initialized')
TABLE_NAME = 'prep-masterclass-testimonials'
dynamodb = boto3.resource('dynamodb')


def lambda_handler(event, context):
    print('get lambda handler invoked')
    data = get_testimonials()
    active_data = list(filter(lambda x: x['is_active'] == True, data))
    return active_data

def get_testimonials():
    table = dynamodb.Table(TABLE_NAME)
    resp = table.scan()
    return resp['Items']