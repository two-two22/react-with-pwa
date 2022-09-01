# 모델 시각화에 사용되는 모듈
from keras.utils.vis_utils import model_to_dot
from IPython.display import SVG
import matplotlib.pyplot as plt

import tensorflow as tf
from PIL import Image
import numpy as np

import os
import cv2
import mediapipe as mp
from PIL import Image
import glob
import numpy as np
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
mp_face_mesh = mp.solutions.face_mesh
# 가중치와 옵티마이저를 포함하여 정확히 동일한 모델을 다시 생성합니다
model = tf.keras.models.load_model('python/face_shape/face-model.h5')

# 모델 구조를 출력합니다
# new_model.summary()

# 모델을 테스트합니다
# 라벨 종류 :cat, dino, dog, elephant_seal, fish, fox, frog, horse, koala, monkey, puppy, rat, snake, wolf
categories = ["cat", "dino", "dog", "elephant_seal", "fish", "fox",
              "frog", "horse", "koala", "monkey", "puppy", "rat", "snake", "wolf", "bear", "rabbit"]

image_w = 64
image_h = 64
pixels = image_w * image_h * 3

# 내 얼굴 facemesh 씌우기
your_face = cv2.imread('src/uploads/faceimage.jpg')
your_face_size = your_face.shape  # (height, width, channels) return

drawing_spec = mp_drawing.DrawingSpec(thickness=1, circle_radius=1)
with mp_face_mesh.FaceMesh(
        static_image_mode=True,
        max_num_faces=1,
        refine_landmarks=True,
        min_detection_confidence=0.5) as face_mesh:
    results = face_mesh.process(cv2.cvtColor(your_face, cv2.COLOR_BGR2RGB))
    black_image = cv2.imread('python/face_shape/black.jpeg')
    black_image = cv2.resize(
        black_image, (your_face_size[1], your_face_size[0]))
    for face_landmarks in results.multi_face_landmarks:
        mp_drawing.draw_landmarks(
            image=black_image,
            landmark_list=face_landmarks,
            connections=mp_face_mesh.FACEMESH_TESSELATION,
            landmark_drawing_spec=None,
            connection_drawing_spec=mp_drawing_styles
            .get_default_face_mesh_tesselation_style())
        mp_drawing.draw_landmarks(
            image=black_image,
            landmark_list=face_landmarks,
            connections=mp_face_mesh.FACEMESH_CONTOURS,
            landmark_drawing_spec=None,
            connection_drawing_spec=mp_drawing_styles
            .get_default_face_mesh_contours_style())
        mp_drawing.draw_landmarks(
            image=black_image,
            landmark_list=face_landmarks,
            connections=mp_face_mesh.FACEMESH_IRISES,
            landmark_drawing_spec=None,
            connection_drawing_spec=mp_drawing_styles
            .get_default_face_mesh_iris_connections_style())
        cv2.imwrite('src/uploads/sample_facemeshed.jpg', black_image)

img = Image.open('src/uploads/sample_facemeshed.jpg')
img = img.convert("RGB")
img = img.resize((image_w, image_h))
data = np.asarray(img)
x_test = np.array([data])
x_test = x_test.astype("float") / 256
y_predict = model.predict(x_test)

# image = tf.image.decode_png('sample.png')
# image = tf.cast(image, tf.float32)
# print(model.predict(image))
# print(y_predict)  # [[5.441674e-01 5.372047e-04 4.552954e-01]]
# print(y_predict[0])  # [5.441674e-01 5.372047e-04 4.552954e-01]
# print(y_predict[0].argmax())  # 0
label = categories[y_predict[0].argmax()]
confidence = y_predict[0][y_predict[0].argmax()]
print(label)

# test_images = labels[y_predict[0].argmax()]
# test_labels = y_predict[0][y_predict[0].argmax()]
# loss, acc = model.evaluate(test_images, test_labels, verbose=2)
print(100*confidence)
# print(label, confidence)

# 모델의 시각화
# SVG(model_to_dot(model, show_shapes=True).create(prog='dot', format='svg'))
# plt.show()  # %matplotlib inline
