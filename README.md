# Enhanced SegNet with Integrated Grad-CAM for Interpretable Retinal Layer Segmentation in OCT Images

This repository contains the implementation of an enhanced SegNet-based deep learning framework for automated and interpretable retinal layer segmentation in Optical Coherence Tomography (OCT) images. The project integrates Gradient-weighted Class Activation Mapping (Grad-CAM) to provide visual explanations for the segmentation results, enhancing clinical trust.

## Project Overview

Accurate segmentation of retinal layers in OCT images is crucial for diagnosing and monitoring various vision-threatening diseases. This project addresses the challenges of manual segmentation by proposing an automated deep learning approach. Key features include:

- A modified SegNet architecture tailored for high-resolution medical image segmentation.
- A custom hybrid loss function to handle class imbalance and improve segmentation accuracy, especially for thin layers.
- Integration of Grad-CAM for generating class-specific heatmaps to visualize model decisions and improve interpretability.

## Key Sections

- **Importing Necessary Libraries**: Utilization of standard deep learning and image processing libraries including TensorFlow, Keras, OpenCV, NumPy, Matplotlib, and Scikit-learn.
- **Exploratory Data Analysis (EDA)**: Initial analysis of the dataset to understand image and mask characteristics, pixel distributions, and class balance.
- **Data Preprocessing**: Steps taken to prepare the data for model training, including normalization, resizing, and one-hot encoding of masks.
- **Model Architecture (SegNet-based CNN)**: Detailed description of the implemented encoder-decoder SegNet architecture with modifications for improved performance.
- **Custom Loss & Metrics**: Definition of the evaluation metrics (Dice Coefficient, Jaccard Coefficient) and the custom hybrid loss function.
- **Training the Model**: Outline of the training procedure, including optimizer, learning rate, batch size, and callback functions.
- **Model Predictions**: How predictions are generated and evaluated, including visual comparison with ground truth masks.
- **Explainable AI (XAI) - Grad-CAM Integration**: Explanation of how Grad-CAM is used to provide visual interpretability of the model's segmentation decisions.

## Dataset

The study utilizes the Duke OCT dataset, comprising 220 retinal OCT images and their corresponding 8-class segmentation masks.

- **Image Resolution**: 216 × 500 pixels (resized to 256x256 for training).
- **Number of Classes**: 8 unique values (0-7), each representing a specific retinal layer.

**Preprocessing:**

- Pixel intensity normalization to [0, 1].
- Resizing images and masks to 256x256 (bilinear for images, nearest-neighbor for masks).
- One-hot encoding of segmentation masks.
- Data split: 80% training, 20% validation.   

## Model Architecture

The core of the framework is a SegNet-based Convolutional Neural Network (CNN) with an encoder-decoder structure.

- **Encoder**: Consists of convolutional and max-pooling layers for feature extraction. Pooling indices are stored for use in the decoder.
- **Decoder**: Uses transposed convolutional layers and stored pooling indices for upsampling and reconstructing the segmentation mask. Skip connections are incorporated for better spatial detail preservation.

**Modifications:**

- A modified architecture with a maximum filter depth of 512 and full-resolution skip connections was used to optimize for computational resources while retaining fine spatial information.

**Output Layer:**

- A 1x1 convolutional layer followed by a softmax activation function outputs the 8-channel probability map for pixel-wise classification.

## Loss Function and Metrics

- **Custom Hybrid Loss**: A combination of Categorical Cross-Entropy (CCE) and Dice Loss \(L = L_{CCE} + 0.5 \times (1 - \text{Dice Coefficient})\) is used to address class imbalance and improve segmentation quality, particularly for thin layers.

**Evaluation Metrics:**

- Accuracy: Proportion of correctly classified pixels.
- Dice Coefficient: Measures the overlap between predicted and ground truth masks.
- Jaccard Index (IoU): Measures the intersection over union, a stricter metric for segmentation precision.

## Training Strategy

- **Optimizer**: Adam optimizer with an initial learning rate of 0.001.
- **Epochs**: 100
- **Batch Size**: 32

**Callbacks:**

- ReduceLROnPlateau: Reduces learning rate when validation loss plateaus.
- EarlyStopping: Stops training if validation loss does not improve for a specified patience.
- ModelCheckpoint: Saves the model weights with the minimum validation loss.
- CSVLogger: Logs training metrics per epoch.

## Experimental Results

The model demonstrated strong performance on the validation set:

- **Validation Accuracy**: 95.77%
- **Validation Dice Coefficient**: 0.9446
- **Validation Jaccard Index (IoU)**: 0.8951
- **Validation Loss**: 0.1354

Visual inspection of predicted masks showed good alignment with ground truth, although challenges were noted in segmenting thin or complex layers (specifically Classes 3 and 4), which exhibited lower IoU scores (0.71 and 0.68 respectively).

## Explainable AI (XAI) - Grad-CAM

Grad-CAM was integrated to provide visual explanations for the model's predictions. By generating class-specific heatmaps, Grad-CAM highlights the regions in the OCT image that most influenced the segmentation decision for each retinal layer. This enhances transparency and helps clinicians validate the model's reasoning. Analysis of heatmaps from different layers (e.g., Conv2d_19 and Conv2d_20) provided insights into the hierarchical feature learning process.

## Novelty and Contributions

- Enhanced SegNet architecture with skip connections and optimized filter depth for retinal layer segmentation.
- Implementation of a hybrid loss function tailored for multi-class segmentation with class imbalance.
- Integration and analysis of multi-class Grad-CAM for interpreting segmentation decisions in OCT images.
- Comprehensive evaluation including class-wise analysis to identify segmentation challenges.

## Dependencies

- TensorFlow
- Keras
- OpenCV (cv2)
- NumPy
- Matplotlib
- Scikit-learn (sklearn)

## Usage

> **Note**: The full code is not provided in the PDF. This section assumes you have the complete codebase.

1. Clone this repository.
2. Install the required dependencies:

```bash
pip install tensorflow keras opencv-python numpy matplotlib scikit-learn
```

3. Place your dataset (images and masks in .npy format as indicated in the PDF) in the appropriate directory.
4. Run the main script (e.g., `train.py` or a Jupyter notebook) to perform data loading, preprocessing, model training, evaluation, and Grad-CAM visualization.

(Replace with specific instructions based on your actual code structure)

## Authors

- **S M Asiful Islam Saky** (Corresponding Author)
- **Ugyen Tshering**

**Affiliation**: Albukhary International University, Malaysia

## License

(Add your chosen license here, e.g., MIT, Apache 2.0)