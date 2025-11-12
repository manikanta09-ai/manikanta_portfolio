import { Card, CardContent } from "./components/ui/card";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="text-center py-10 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-2"
        >
          Nallamalli Venkata Satya Sai Manikanta
        </motion.h1>
        <p className="text-lg">
          Data Science & Artificial Intelligence Student | Web Developer | ML Enthusiast
        </p>
        <div className="flex justify-center gap-5 mt-4">
          <a href="mailto:manikantanallamalli33@gmail.com"><Mail /></a>
          <a href="tel:+917013051595"><Phone /></a>
          <a href="https://www.linkedin.com/in/manikanta-nallamalli-82787b1ba/" target="_blank"><Linkedin /></a>
          <a href="https://github.com/manikanta09-ai" target="_blank"><Github /></a>
        </div>
      </header>

      {/* Summary */}
      <section className="max-w-4xl mx-auto my-10 p-5">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p>
          Motivated Data Science and Artificial Intelligence student at ICFAI University, Hyderabad, 
          with hands-on experience in web development and machine learning. Proven leadership in managing 
          technical tasks at Yantrikee Club.
        </p>
      </section>

      {/* Skills */}
      <section className="max-w-4xl mx-auto my-10 p-5">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <Card><CardContent>Python</CardContent></Card>
          <Card><CardContent>Java</CardContent></Card>
          <Card><CardContent>HTML, CSS, JavaScript, React</CardContent></Card>
          <Card><CardContent>OOP Concepts</CardContent></Card>
          <Card><CardContent>Teamwork, Documentation</CardContent></Card>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto my-10 p-5">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <Card>
          <CardContent>
            <h3 className="text-xl font-semibold">3T Worldwide Pvt. Ltd. | Procurement Intern / Part-Time Associate</h3>
            <p className="text-sm text-gray-500">June 2024 – Nov 2024</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Processed 50+ supplier records weekly with 95% accuracy using Salesforce.</li>
              <li>Coordinated with US team to onboard 15+ new suppliers monthly.</li>
              <li>Reduced vendor communication turnaround time by 20%.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto my-10 p-5">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          <Card>
            <CardContent>
              <h3 className="text-lg font-bold">EarlyGuard — Community-Driven Disaster Early Warning System</h3>
              <p><strong>Tools:</strong> ESP32, LoRa, FM Radio, IoT Sensors, Machine Learning</p>
              <p>Developed an IoT-based alert system for rural areas using mesh networks and FM radio for offline operation during network failures.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-lg font-bold">Drowsiness Detection System</h3>
              <p><strong>Tools:</strong> Python, OpenCV, CNNs</p>
              <p>Built a real-time driver drowsiness detection system that analyses eye aspect ratio (EAR) and facial landmarks to detect prolonged eye closure.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-lg font-bold">Malware Detection using Machine Learning</h3>
              <p><strong>Tools:</strong> Python, Scikit-learn, Feature Engineering</p>
              <p>Implemented a malware classification pipeline combining static binary features and behavioral indicators.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="text-lg font-bold">Face Mask Detection System</h3>
              <p><strong>Tools:</strong> Python, OpenCV, Kaggle Dataset</p>
              <p>Built a CNN-based real-time classifier for mask detection using OpenCV and preprocessed dataset.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto my-10 p-5">
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>Data Science and Analytics – HP Life</li>
          <li>Data Analytics Job Simulation – Tata Group</li>
          <li>Data Processing and Visualization – NASSCOM</li>
          <li>Artificial Intelligence – IBM</li>
          <li>Microsoft Azure AI Fundamentals (AI-900) – Microsoft</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-100 border-t mt-10">
        <p>© {new Date().getFullYear()} Manikanta Nallamalli. All rights reserved.</p>
      </footer>
    </div>
  );
}
