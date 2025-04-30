import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';
import Abstract from '@/components/Abstract';
import Section from '@/components/Section';
// Removed MethodologyChart import as it's no longer used in this section
// import MethodologyChart from '@/components/MethodologyChart';
import ResultsChart from '@/components/ResultsChart';
import Reference from '@/components/Reference';
import ScrollToTop from '@/components/ScrollToTop';
import useScrollSpy from '@/hooks/useScrollSpy';
import Footer from '@/components/Footer'; // Import the Footer component


const sectionIds = ['abstract', 'introduction', 'literature', 'methodology', 'results', 'conclusion', 'references'];

const Index = () => {
  const activeSection = useScrollSpy(sectionIds, 100);
  
  // Sample data for charts (Keep if used elsewhere, otherwise can remove)
  // const methodologyData = [
  //   { name: 'Qualitative', value: 40 },
  //   { name: 'Quantitative', value: 60 },
  // ];
  
  const sampleData = [
    { name: 'Group A', value: 400, count: 320 },
    { name: 'Group B', value: 300, count: 230 },
    { name: 'Group C', value: 300, count: 280 },
    { name: 'Group D', value: 200, count: 190 },
    { name: 'Group E', value: 278, count: 240 },
    { name: 'Group F', value: 189, count: 170 },
  ];

  const sections = [
    { id: 'abstract', title: 'Abstract' },
    { id: 'introduction', title: 'Introduction' },
    { id: 'literature', title: 'Literature Review' },
    { id: 'methodology', title: 'Methodology' },
    { id: 'results', title: 'Results & Findings' },
    { id: 'conclusion', title: 'Conclusion' },
    { id: 'references', title: 'References' },
  ];

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
      <div className="max-w-screen-lg mx-auto bg-white shadow-md">
      <Header 
  title="Enhanced SegNet with Integrated Grad-CAM for Interpretable Retinal Layer Segmentation in OCT Images" 
  authors={[
    { name: 'S M Asiful Islam Saky', affiliation: 1, isCorresponding: true },
    { name: 'Ugyen Tshering', affiliation: 1 },
  ]}
  affiliations={['Albukhary International University, Kedah, Malaysia']}
  date="The paper is currently under review at Intelligensia Artificial."
  email="*saky.aiu22@gmail.com"
/>
        
        <div className="px-4 md:px-8 lg:px-12">
          <Navigation sections={sections} activeSection={activeSection} />

          <div className="max-w-3xl mx-auto text-justify leading-[1.5]">
            <Abstract 
              content={`
                This study introduces an enhanced SegNet-based deep learning framework for automated, 
                interpretable retinal layer segmentation in Optical Coherence Tomography (OCT) images, 
                crucial for diagnosing vision-threatening conditions like glaucoma, diabetic retinopathy, 
                and age-related macular degeneration. The framework incorporates architectural innovations, 
                such as modified pooling strategies, and a hybrid loss function combining categorical Cross-Entropy 
                and Dice Loss to address class imbalance and improve thin layer segmentation. Gradient-weighted Class 
                Activation Mapping (Grad-CAM) is integrated to provide visual explanations, enhancing clinical trust. 
                Trained on the Duke OCT dataset, the model achieves a validation accuracy of 95.77%, a Dice Coefficient of 0.9446, 
                and a Jaccard Index (IoU) of 0.8951. Despite challenges with thinner layers, Grad-CAM visualizations confirm 
                alignment with clinical biomarkers, bridging the gap between high accuracy and clinical utility.
              `}
            />

            <Section id="introduction" title="Introduction">
              <p>Optical Coherence Tomography (OCT) is vital for diagnosing retinal diseases such as glaucoma, diabetic retinopathy, and age-related macular degeneration, affecting over 300 million people globally. Accurate retinal layer segmentation provides essential biomarkers, but manual segmentation is time-consuming, inconsistent, and impractical, with up to 15% variability among clinicians. Deep learning offers high accuracy but faces challenges like speckle noise, pathological distortions, device variability, and the "black-box" nature of models, which erodes clinical trust. This study proposes an improved SegNet framework with architectural enhancements, a hybrid loss function, and Grad-CAM for interpretability. The model aims to deliver precise, transparent segmentation, enhancing diagnostic efficiency and trust in AI-driven ophthalmic tools.</p>
            </Section>
            
            <Section id="literature" title="Literature Review">
              <p className="mb-4 text-justify leading-[1.5]">OCT is a cornerstone in ophthalmology for high-resolution retinal imaging, critical for diagnosing diseases like age-related macular degeneration, diabetic macular edema, and glaucoma. Traditional segmentation methods, such as graph-based algorithms and active contour models, rely on manual input, struggle with pathological distortions, and are sensitive to noise, limiting clinical utility.</p>
              
              <p className="mb-4 text-justify leading-[1.5]">Deep learning, particularly encoder-decoder architectures like U-Net and SegNet, has revolutionized segmentation by addressing noise and distortions, achieving Dice scores of 0.85-0.90. SegNet is notable for its efficiency and low memory use, making it suitable for real-time applications. However, challenges include the need for large annotated datasets and the lack of interpretability in deep learning models. Explainable AI (XAI), particularly Grad-CAM, enhances transparency by generating heatmaps to reveal model decision-making, fostering clinical trust. This study builds on these advancements to improve segmentation accuracy and interpretability.</p>
            </Section>
            
            <Section id="methodology" title="Methodology">
              <p className="mb-4 text-justify leading-[1.5]">
                This study employed an enhanced SegNet-based deep learning framework for automated retinal layer segmentation in Optical Coherence Tomography (OCT) images, incorporating Explainable AI (XAI) via Grad-CAM.
              </p>
              <p className="mb-4 text-justify leading-[1.5]">
                <b>Dataset and Preprocessing:</b> The Duke OCT dataset, comprising 220 OCT images (216x500 pixels) and corresponding 8-class segmentation masks, was used. Preprocessing involved normalizing pixel intensities to [0,1], resizing images and masks to 256x256 (bilinear for images, nearest-neighbor for masks), and one-hot encoding the masks for multi-class segmentation. The dataset was split into 80% training and 20% validation sets.
                <Section 
  id="example-section" 
  imageSrc="/imgs/data.png" 
  imageAlt="Example Image" 
  imageClassName="rounded-lg shadow-md"
>
<p className="text-center italic text-sm">Figure 1: Two random samples/images (cmap=‘gray’), with their respective mask (cmap = ‘jet’). </p>
</Section>
              </p>
               <p className="mb-4 text-justify leading-[1.5]">
                <b>Model Architecture:</b> An encoder-decoder SegNet architecture was chosen for pixel-wise segmentation. SegNet utilizes pooling indices during downsampling to improve spatial detail reconstruction during upsampling. To suit the experimental setup (Kaggle free-tier GPU), a modified SegNet with a maximum filter depth of 512 was implemented, alongside full-resolution skip connections to preserve fine spatial information crucial for thin retinal layers. The output layer consists of a 1x1 convolution mapping to 8 channels, followed by a softmax activation for multi-class pixel classification.
                <Section 
  id="example-section" 
  imageSrc="/imgs/arch.png" 
  imageAlt="Example Image" 
  imageClassName="rounded-lg shadow-md"
>
<p className="text-center italic text-sm">Figure 2. Overview of the SegNet architecture used for retinal layer segmentation which scans grayscale OCT images using an encoder-decoder module. </p>
</Section>
            
              </p>
               <p className="mb-4 text-justify leading-[1.5]">
                <b>Loss Function and Training:</b> A hybrid loss function combining Categorical Cross-Entropy (CCE) and Dice Loss (with $\lambda=0.5$) was employed to balance pixel-wise accuracy and segmentation quality, particularly addressing class imbalance. The model was trained for 100 epochs with a batch size of 32 using the Adam optimizer (learning rate 0.001). Training incorporated `ReduceLROnPlateau`, `EarlyStopping` (with patience), `ModelCheckpoint` (saving the best weights based on validation loss), and `CSVLogger` for monitoring.
              </p>
               <p className="mb-4 text-justify leading-[1.5]">
                <b>Evaluation:</b> Quantitative evaluation on the validation set used Accuracy, Dice Coefficient, and Jaccard Index (IoU). Qualitative assessment involved visual comparison of predicted and ground truth masks and analysis of misclassification patterns.
              </p>
              <p className="mb-4 text-justify leading-[1.5]">
                <b>Experimental Setup:</b> Experiments were conducted on Kaggle using an NVIDIA Tesla P100 GPU. The environment included Python 3.10.12, TensorFlow 2.12.0, Keras, and OpenCV.
              </p>
               <p className="mb-4 text-justify leading-[1.5]">
                <b>Explainable AI (XAI) Integration:</b> Gradient-weighted Class Activation Mapping (Grad-CAM) was integrated to provide visual interpretability by generating heatmaps. These heatmaps highlight the image regions most influential to the segmentation prediction for *each* of the eight retinal layers (multi-class Grad-CAM). This approach helps verify the model's focus aligns with anatomical structures, enhancing clinical trust and aiding in error analysis. Grad-CAM heatmaps are derived from gradients of the class score concerning feature maps, then passed through a ReLU function and overlaid on the original image.
              </p>
               {/* MethodologyChart removed as it's not relevant to the technical review structure */}
              {/* <h3 className="text-xl font-medium mb-3">Approach Distribution</h3>
              <MethodologyChart data={methodologyData} title="Research Approach Distribution" /> */}
            </Section>
            
            <Section id="results" title="Experimental Results">
              <p className="mb-4 text-justify leading-[1.5]">
                 This section presents the experimental results, covering model training performance, quantitative evaluation, visual interpretation, class-wise analysis, and insights gained from the Explainable AI (XAI) integration.
              </p>
              <p className="mb-4 text-justify leading-[1.5]">
                <b>Model Training Performance:</b> The model was trained and evaluated using standard metrics: Accuracy, Loss, Dice Coefficient, and Jaccard Index (IoU). Training curves demonstrated consistent convergence and high final performance on both training and validation sets, indicating effective learning and generalization without significant overfitting. Key final validation metrics achieved were: Accuracy 95.77%, Dice Coefficient 0.9446, and Jaccard Index (IoU) 0.8951. The validation loss converged to 0.1354, further confirming robustness on unseen data.
                <Section 
  id="example-section" 
  imageSrc="/imgs/train.png" 
  imageAlt="Example Image" 
  imageClassName="rounded-lg shadow-md"
>
<p className="text-center italic text-sm">Figure 3: Model Training Curves – Accuracy, Loss, Dice Coefficient, and Jaccard Index (IoU)</p>
</Section>
                
              </p>
              <p className="mb-4 text-justify leading-[1.5]">
                <b>Visual Interpretation:</b> Visual comparison of predicted segmentation masks against ground truth showed good spatial alignment and boundary delineation for major retinal layers. Challenges were noted in low-contrast areas, thin layers, and texture-sensitive regions, leading to localized inaccuracies. Analysis of misclassified pixels identified primary failure modes as border ambiguity, over-segmentation, and under-segmentation, highlighting difficulties with fine-grained structures and class boundaries.
                <Section 
  id="example-section" 
  imageSrc="/imgs/vr.png" 
  imageAlt="Example Image" 
  imageClassName="rounded-lg shadow-md"
>
<p className="text-center italic text-sm">Figure 4: Visual comparison of OCT input, ground truth, and predicted retinal layer segmentation masks across three different OCT samples.</p>
</Section>
                
              </p>
              <p className="mb-4 text-justify leading-[1.5]">
                <b>Class-wise Analysis:</b> Class-wise evaluation revealed performance variations across the eight retinal layers. Class 0 achieved exceptional results (IoU 0.99, Accuracy 99.2%). Robust performance was seen in Classes 2, 5, and 6 (IoU &gt; 0.85, Accuracy &gt; 90%). Classes 1 and 7 had moderate performance, while Classes 3 and 4 exhibited diminished scores (IoU 0.71 and 0.68), suggesting challenges potentially related to class imbalance or complex anatomical structures. Visualizations clearly depicted these class-wise performance differences.
              </p>
              <p className="mb-4 text-justify leading-[1.5]">
                <b>Explainable AI (XAI) Insights:</b> Integration of Grad-CAM provided valuable interpretability by generating class-specific heatmaps. Analysis of heatmaps from layers Conv2d_19 (feature refinement) and Conv2d_20 (final classification) showed how feature activations contribute to segmentation decisions for each layer. Conv2d_20 exhibited more refined, class-specific attention compared to Conv2d_19, indicating improved class separability in deeper layers. This multi-class XAI approach enhances clinical trust by visually confirming the model's focus on clinically relevant anatomical regions and aids in understanding segmentation errors and potential biases.
                <Section 
  id="example-section" 
  imageSrc="/imgs/xai.png" 
  imageAlt="Example Image" 
  imageClassName="rounded-lg shadow-md"
>
<p className="text-center italic text-sm">Figure 5: Visualization of hierarchical feature maps from two consecutive convolutional layers (Conv2d_19 and Conv2d_20). (L1): (a) Input image; (b–i) Feature maps from Conv2d_19, corresponding to Class 0–7,  Bottom row (L2): (a–i) Feature maps from Conv2d_20</p>
</Section>
                
              </p>
            </Section>
            
            <Section id="conclusion" title="Conclusion">
              <p className="mb-4 text-justify leading-[1.5]">
                This study successfully developed an enhanced SegNet-based deep learning framework for automated, interpretable retinal layer segmentation in OCT images, a critical task for diagnosing vision-threatening diseases. The key contributions include architectural refinements, a hybrid loss function combining Categorical Cross-Entropy and Dice Loss to handle class imbalance, and the integration of Gradient-weighted Class Activation Mapping (Grad-CAM) for explainability.
              </p>
              <p className="mb-4 text-justify leading-[1.5]">
                The model demonstrated strong empirical performance on the Duke OCT dataset, achieving a validation accuracy of 95.77%, a Dice Coefficient of 0.9446, and a Jaccard Index (IoU) of 0.8951. This performance highlights the model's ability to accurately delineate retinal layers efficiently. The Grad-CAM integration provided valuable visual explanations, generating per-class heatmaps that align model predictions with known anatomical structures, thereby enhancing clinical trust and validating the network's hierarchical feature learning.
              </p>
               <p className="mb-4 text-justify leading-[1.5]">
                While the model achieved high overall accuracy, challenges persist in segmenting certain thin or complex layers (specifically Classes 3 and 4), indicating areas for potential improvement. Future work should focus on addressing these specific challenges, perhaps through refined loss functions or attention mechanisms, exploring larger and more diverse multi-center datasets to improve generalizability across different devices and patient populations, and investigating advanced architectures for robustness against pathological variations.
              </p>
               <p className="mb-4 text-justify leading-[1.5]">
                In conclusion, this work advances automated OCT retinal layer segmentation by effectively combining high algorithmic accuracy with essential clinical interpretability. The resulting system is a promising, transparent, and scalable tool poised to support AI-assisted diagnostics and monitoring in ophthalmology.
              </p>
            </Section>
            
            <Section id="references" title="References">
  <Reference 
    authors="Alharbi, M., & Gupta, D."
    year="2023"
    title="Segmentation of diabetic retinopathy images using deep feature fused residual with U-Net"
    source="Alexandria Engineering Journal"
    doi="10.1016/j.aej.2023.10.040"
  />
  
  <Reference 
    authors="Hardani, D., Ardiyanto, I., & Nugroho, H."
    year="2024"
    title="Decoding brain tumor insights: Evaluating CAM variants with 3D U-Net for segmentation"
    source="Communications in Science and Technology"
    doi="10.21924/cst.9.2.2024.1477"
  />
  
  <Reference 
    authors="Rheude, T., Wirtz, A., Kuijper, A., & Wesarg, S."
    year="2024"
    title="Leveraging CAM Algorithms for Explaining Medical Semantic Segmentation"
    source="ArXiv, abs/2409.20287"
    doi="10.59275/j.melba.2024-ebd3"
  />
  
  <Reference 
    authors="Selvaraju, R. R., Cogswell, M., Das, A., Vedantam, R., Parikh, D., & Batra, D."
    year="2017"
    title="Grad-CAM: Visual explanations from deep networks via gradient-based localization"
    source="2017 IEEE International Conference on Computer Vision (ICCV), 618-626"
    doi="10.1109/ICCV.2017.74"
  />
  
  <Reference 
    authors="Suara, S., Jha, A., Sinha, P., & Sekh, A."
    year="2023"
    title="Is Grad-CAM Explainable in Medical Images?"
    source="Proceedings of the International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI), 124-135"
    doi="10.1007/978-3-031-58181-6_11"
  />
  
  <Reference 
    authors="Wang, L., Shen, M., Shi, C., Zhou, Y., Chen, Y., Pu, J., & Chen, H."
    year="2022"
    title="EE-Net: An edge-enhanced deep learning network for jointly identifying corneal micro-layers from optical coherence tomography"
    source="Biomedical Signal Processing and Control, 71, 103213"
    doi="10.1016/j.bspc.2021.103213"
  />
  
  <Reference 
    authors="Xiao, M., Zhang, L., Shi, W., Liu, J., He, W., & Jiang, Z."
    year="2021"
    title="A visualization method based on the Grad-CAM for medical image segmentation model"
    source="2021 International Conference on Electronic Information Engineering and Computer Science (EIECS), 242-247"
    doi="10.1109/EIECS53707.2021.9587953"
  />
  
  <Reference 
    authors="Zhang, B., Zhao, H., Si, M., Cui, W., Zhou, Y., Fu, S., & Wang, H."
    year="2024"
    title="RC-Net: A region-level context network for hyperreflective dots segmentation in retinal OCT images"
    source="Optics and Lasers in Engineering"
    doi="10.1016/j.optlaseng.2023.107872."
  />
</Section>
          </div>
        </div>
      </div>
      
      <ScrollToTop />
<Footer />
    </div>
  );
};

export default Index;