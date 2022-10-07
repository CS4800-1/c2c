from cProfile import label
import time
from winotify import Notification, audio

toast = Notification(app_id="Coffee2Conference",
							title="Updated Availibities",
							msg="Person added their times.",
							duration="long",
							icon=r"C:\Users\moina\Documents\..CPP\.F2022\CS 4800\c2c\c2c\images\coffee_icon.jpg")

							#alt duration="short"

toast.set_audio(audio.LoopingCall, loop=True)
							#alt loop=False
toast.add_actions(label="Check Schedule", launch="https://www.when2meet.com/")
toast.show()