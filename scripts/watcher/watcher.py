import time
import argparse
import requests
import glob
import os
from requests_toolbelt.multipart.encoder import MultipartEncoder
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

parser = argparse.ArgumentParser()
parser.add_argument('--server')
parser.add_argument('--watch_dir')
parser.add_argument('--camera_location')
parser.add_argument('--camera_name')
args = parser.parse_args()

class Handler(FileSystemEventHandler):
    def __init__(self, server, camera_name, camera_location):
        Handler.server = server
        Handler.camera_name = camera_name
        Handler.camera_location = camera_location

    @staticmethod
    def on_any_event(event):
        if event.is_directory:
            return None

        elif event.event_type == 'deleted':
            if event.src_path.lower().endswith(('.h264')):
                video_path = event.src_path[:-len('.h264')]
                preview_image_path = glob.glob(video_path + '.*.jpg')[0]

                if os.path.isfile(video_path) and os.path.isfile(preview_image_path):
                    m = MultipartEncoder(
                    fields={'cameraName': Handler.camera_name,
                            'cameraLocation': Handler.camera_location,
                            'video': ('filename', open(video_path, 'rb')),
                            'previewImage': ('filename', open(preview_image_path, 'rb')),
                            }
                    )
                    try:
                        r = requests.post(Handler.server, data=m, headers={'Content-Type': m.content_type})
                    except requests.exceptions.ConnectionError as e:
                        print e

class Watcher():
    def __init__(self, watch_dir, server, camera_name, camera_location):
        self.server = server
        self.watch_dir = watch_dir
        self.camera_name = camera_name
        self.camera_location = camera_location
        self.observer = Observer()

    def run(self):
        event_handler = Handler(self.server, self.camera_name, self.camera_location)
        self.observer.schedule(event_handler, self.watch_dir, recursive=True)
        self.observer.start()
        try:
            while True:
                time.sleep(5)
        except:
            self.observer.stop()
            print "Error"

        self.observer.join()

if __name__ == '__main__':
    w = Watcher(args.watch_dir, args.server, args.camera_name, args.camera_location)
    w.run()
