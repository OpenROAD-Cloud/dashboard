#!/usr/bin/python3

import argparse
import json
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore


class CapitalisedHelpFormatter(argparse.ArgumentDefaultsHelpFormatter):
    def add_usage(self, usage, actions, groups, prefix=None):
        if prefix is None:
            prefix = 'Usage: '
            return super(CapitalisedHelpFormatter, self).add_usage(usage, actions, groups, prefix)


def save_to_firebase(collection, metrics, design, tech):
    # need to export GOOGLE_APPLICATION_CREDENTIALS="/path/to/service/account/credentials.json"
    print('Saving ' + tech + '-' + design)

    # Use the application default credentials
    cred = credentials.ApplicationDefault()
    firebase_admin.initialize_app(cred, {
        'projectId': 'openroad-dashboard',
    })

    db = firestore.client()

    doc = tech + '-' + design
    doc_ref = db.collection(collection).document(doc)

    builds = doc_ref.get().to_dict()['builds']
    builds.insert(0, metrics)

    doc_ref.set({
        u'builds': builds[:30]
    })


if __name__ == "__main__":
    parser = argparse.ArgumentParser(add_help=True, formatter_class=CapitalisedHelpFormatter,
                                     description='Save metadata.json file to Firebase database')
    parser._positionals.title = 'Positional arguments'
    parser._optionals.title = 'Optional arguments'
    parser.add_argument("db", type=str, choices=['db1', 'db2'],
                        help="Database to save to")
    parser.add_argument("tech", type=str,
                        help="Technology node name")
    parser.add_argument("design", type=str,
                        help="Design name")
    parser.add_argument("metrics", type=open, nargs='?', default='metadata.json',
                        help="Path to the metadata.json file")
    args = parser.parse_args()

    metrics = json.load(args.metrics)
    if args.db == 'db1':
        save_to_firebase('metrics', metrics, args.design.lower().replace('_', ''), args.tech.lower().replace('_', ''))
    else:
        save_to_firebase('metrics2', metrics, args.design.lower().replace('_', ''), args.tech.lower().replace('_', ''))
