import {Github,Gmail} from "./components/Icons";

const Dash=({children})=><ul>{children}</ul>;

function Section({title,children}){return <section><h2>{title}</h2>{children}</section>}

export default function App(){
return <main className="page">

<header>
<div className="top">
<h1>Kamran Shahid</h1>
<div className="icons">
<a href="https://github.com/kamranshahid56-tech"><Github/></a>
<a href="mailto:kamranshahid227@gmail.com"><Gmail/></a>
</div>
</div>

<p className="intro">
I am an <i>AI/ML Engineer</i> building intelligent systems across
<i> large language models, computer vision, multimodal learning, and RAG.</i>
My work focuses on creating reliable AI solutions, especially for healthcare applications.
</p>
</header>

<Section title="Previously">
<Dash>
<li>Built AI systems involving language models, computer vision, and multimodal learning.</li>
<li>Developed healthcare AI solutions including medical triage and medical imaging systems.</li>
<li>Conducted research on trustworthy multimodal medical AI.</li>
<li>Worked on backend systems and cloud infrastructure for AI applications.</li>
</Dash>
</Section>

<Section title="Research">
<h3><a href="https://arxiv.org/abs/2607.13800" target="_blank">Multi-Image Chest Radiograph Classification</a></h3>
<p><i>Prospective Clinical Indication, Post-Hoc Report Leakage, and Fusion Design</i></p>
<Dash>
<li>Analysed 15,000 studies and 30,000 images using patient-clustered evaluation.</li>
<li>Created SectionGuard-MI to study robust multimodal fusion.</li>
<li>Achieved improved performance while analysing report-label leakage.</li>
</Dash>
</Section>

<Section title="Projects">
<h3><a href="https://github.com/kamranshahid56-tech/AI-symptom-triage-for-rural-areas-Urdu-English" target="_blank">AI Medical Triage Bot</a></h3>
<p><i>WhatsApp-based Urdu symptom triage assistant</i></p>
<Dash>
<li>Built with FastAPI, Whisper, Llama 3.2 and RAG.</li>
<li>Grounded medical responses using trusted healthcare guidelines.</li>
</Dash>

<h3><a href="https://github.com/kamranshahid56-tech/kidney_disease_classification_mlflow_dvc_deploy" target="_blank">Kidney CT Classification Pipeline</a></h3>
<p><i>Computer vision and MLOps workflow</i></p>
<Dash>
<li>Fine-tuned deep learning models achieving 92.1% accuracy.</li>
<li>Deployed reproducible workflows using MLflow, DVC and AWS.</li>
</Dash>

<h3><a href="https://github.com/kamranshahid56-tech/prompt_booster_chrome_extension" target="_blank">Prompt Refiner</a></h3>
<p><i>LLM fine-tuning for prompt enhancement</i></p>
<Dash>
<li>Fine-tuned Qwen2.5 using LoRA/PEFT.</li>
<li>Released reusable AI resources.</li>
</Dash>
</Section>

<Section title="Publications">
<Dash>
<li><a href="https://arxiv.org/abs/2607.13800" target="_blank"><i>Prospective Clinical Indication, Post-Hoc Report Leakage, and Fusion Design in Multi-Image Chest Radiograph Classification</i></a>, arXiv 2026.</li>
</Dash>
</Section>

<footer>
<span></span>
<span>Last updated: September 2026</span>
</footer>

</main>
}