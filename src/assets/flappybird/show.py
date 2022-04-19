from keras_liveness import livenessDetection 
import cv2
import imutils


detect = livenessDetection()

video = cv2.VideoCapture(r'./2.mp4') 
#ret,frame = video.read() 

#vs = cv2.VideoCapture(0)

while True:
	live_detection = detect.run(video)

	if live_detection == 'real':
		print('This is the real. DO THE RECOGNITION')
	else:
        print('fake')
		pass