# import pickle
# from config import MODEL_PATHS

# def load_predictor(model_path: str, tokenizer_path: str, label_encoder_path: str):
#     """
#     Load the trained pipeline and label encoder.
#     Return a callable predict function that takes text input and returns emotion.
#     """
#     # Load the pipeline (TfidfVectorizer + Classifier)
#     with open(model_path, "rb") as f:
#         pipeline = pickle.load(f)

#     # Load the label encoder
#     with open(label_encoder_path, "rb") as f:
#         label_encoder = pickle.load(f)

#     # Return a prediction function
#     def predict(text: str) -> str:
#         label_idx = pipeline.predict([text])[0]
#         emotion = label_encoder.inverse_transform([label_idx])[0]
#         return emotion

#     return predict


'------------------------------------------------------------------------------------------------------'


# import pickle
# from config import MODEL_PATHS

# # Load model
# with open(MODEL_PATHS["model"], "rb") as f:
#     model = pickle.load(f)

# # Load label encoder
# with open(MODEL_PATHS["label_encoder"], "rb") as f:
#     label_encoder = pickle.load(f)

# def predict_emotion(text):
#     prediction = model.predict([text])[0]
#     return label_encoder.inverse_transform([prediction])[0]


'------------------------------------------------------------------------------------------------------'


# import pickle
# import os
# from config import MODEL_PATHS

# # Load model and label encoder once when the app starts
# with open(MODEL_PATHS["model"], "rb") as f:
#     model = pickle.load(f)

# with open(MODEL_PATHS["label_encoder"], "rb") as f:
#     label_encoder = pickle.load(f)

# # Prediction function
# def predict_emotion(text):
#     prediction = model.predict([text])[0]               # Predict label index
#     emotion = label_encoder.inverse_transform([prediction])[0]  # Decode to string
#     return emotion


# -----------------------------------------------------------------------------------------


import sys
import os

# Get the parent directory of the current script (exp1)
script_dir = os.path.dirname(os.path.abspath(__file__))
project_root = os.path.join(script_dir, '..') # Go up one level from 'utils' to 'exp1'

# Add the project root to the Python path
sys.path.insert(0, project_root)

from config import MODEL_PATHS
# ... rest of your code






