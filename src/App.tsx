import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cpu, Database, MessageSquare, ArrowRight, Server, BarChart, Microscope, Activity, Film, MapPin, Phone, Mail } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">C-DAC Patna</span>
          <svg
            className="h-8 w-8"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M8 13h2" />
            <path d="M8 17h2" />
            <path d="M14 13h2" />
            <path d="M14 17h2" />
          </svg>
          <span className="ml-2 text-xl font-bold">C-DAC Patna</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            HPC as a Service
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Facilities
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to C-DAC Patna
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  High Performance Computing Facility for Research and Development in Artificial Intelligence, Big Data, and Chatbots
                </p>
              </div>
              <div className="space-x-4">
                <Button>Explore Our Facilities</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">About C-DAC</h2>
            <div className="prose prose-lg mx-auto dark:prose-invert">
              <p>
                Centre for Development of Advanced Computing (C-DAC) is the premier R&D organization of the Ministry of Electronics and Information Technology (MeitY) for carrying out R&D in IT, Electronics and associated areas. Different areas of C-DAC, had originated at different times, many of which came out as a result of identification of opportunities.
              </p>
              <p>
                The setting up of C-DAC in 1988 itself was to built Supercomputers in context of denial of import of Supercomputers by USA. Since then C-DAC has been undertaking building of multiple generations of Supercomputer starting from PARAM with 1 GF in 1988.
              </p>
              <p>
                Almost at the same time, C-DAC started building Indian Language Computing Solutions with setting up of GIST group (Graphics and Intelligence based Script Technology); National Centre for Software Technology (NCST) set up in 1985 had also initiated work in Indian Language Computing around the same period.
              </p>
              <p>
                Electronic Research and Development Centre of India (ER&DCI) with various constituents starting as adjunct entities of various State Electronic Corporations, had been brought under the hold of Department of Electronics and Telecommunications (now MeitY) in around 1988. They were focusing on various aspects of applied electronics, technology and applications.
              </p>
              <p>
                With the passage of time as a result of creative ecosystem that got set up in C-DAC, more areas such as Health Informatics, etc., got created; while right from the beginning the focus of NCST was on Software Technologies; similarly C-DAC started its education & training activities in 1994 as a spin-off with the passage of time, it grew to a large efforts to meet the growing needs of Indian Industry for finishing schools.
              </p>
              <p>
                C-DAC has today emerged as a premier R&D organization in IT&E (Information Technologies and Electronics) in the country working on strengthening national technological capabilities in the context of global developments in the field and responding to change in the market need in selected foundation areas. In that process, C-DAC represents a unique facet working in close junction with MeitY to realize nation's policy and pragmatic interventions and initiatives in Information Technology. As an institution for high-end Research and Development (R&D), C-DAC has been at the forefront of the Information Technology (IT) revolution, constantly building capacities in emerging/enabling technologies and innovating and leveraging its expertise, caliber, skill sets to develop and deploy IT products and solutions for different sectors of the economy, as per the mandate of its parent, the Ministry of Electronics and Information Technology, Ministry of Communications and Information Technology, Government of India and other stakeholders including funding agencies, collaborators, users and the market-place.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">HPC as a Service</h2>
            <div className="prose prose-lg mx-auto dark:prose-invert">
              <h3 className="text-2xl font-bold mb-4">High Performance Computing as-a-Service</h3>
              <p>
                Boost your AI, ML and Big Data projects and learning with HPCaaS, available at C-DAC Patna. C-DAC Patna's HPC as-a-Service is powered by the most advanced GPUs, and delivering supercomputing performance, massive storage, optimised network and scalability at much lower costs than setting up your own on-premise High Compute environment.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>On-demand dedicated GPU compute instances, powered by NVIDIA</li>
                <li>Deploy your workloads faster, without any CAPEX investment</li>
                <li>Scalable HPC infrastructure available on flexible monthly plans</li>
                <li>End-to-end HPC environment: Compute, Storage, Network and Security</li>
                <li>Scalable and cost-efficient High Performance Compute infrastructure for AI/ML workloads</li>
              </ul>
              <h3 className="text-2xl font-bold mb-4">Why High Performance Compute?</h3>
              <p>
                With the constant increase in data, compute and analysis of the same to return precise results require huge computing prowess. In layman terms, an HPC Infrastructure aggregates the power of multiple high-end processors, which is boosted with a GPU to provide quick and accurate results.
              </p>
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xu8dK2ZTx7YA1mK0hq1wotsLIlIbOt.png" 
                alt="Comparison of development process with and without HPC" 
                className="w-full h-auto my-6 rounded-lg"
              />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">
                Illustration: HPC significantly reduces development time by enabling faster test and design phases.
              </p>
              <p>
                AI/ML are used commercially across industries for efficient and faster computations. Training machines to return accurate results require a vast amount of data. AI delivers better than average accuracy on complex tasks. However, training with these large scale and complex data sets are computationally intensive. This is where HPC supercharges AI and Data analytics to deliver data faster and gives your business an edge over others.
              </p>
              <h3 className="text-2xl font-bold mb-4">Applications of High Performance Computing</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Cpu className="mr-2 h-6 w-6 mt-1 text-primary" />
                  <span><strong>Deep Learning/AI, ML:</strong> Online deep learning training and inference services, image recognition, content identification, and voice recognition</span>
                </li>
                <li className="flex items-start">
                  <Database className="mr-2 h-6 w-6 mt-1 text-primary" />
                  <span><strong>Big Data Analytics:</strong> For large data sets, more computational capacity is required to analyze it. Rather than using standard compute infrastructure, there's a need of High Performance Compute capabilities to enable analytics workloads</span>
                </li>
                <li className="flex items-start">
                  <Server className="mr-2 h-6 w-6 mt-1 text-primary" />
                  <span><strong>Engineering/Research:</strong> Helps crunch complex and large datasets in fields such as aerodynamics, physics or pharmaceuticals</span>
                </li>
                <li className="flex items-start">
                  <Microscope className="mr-2 h-6 w-6 mt-1 text-primary" />
                  <span><strong>Scientific Computing:</strong> HPC can be used to gain deep insights into areas like computational chemistry, financial risk modeling, climate prediction, genetic engineering, energy exploration and development, space research, genomics, seismic imaging and more</span>
                </li>
                <li className="flex items-start">
                  <Activity className="mr-2 h-6 w-6 mt-1 text-primary" />
                  <span><strong>Healthcare and Medicine:</strong> High Performance Computing along with AI is enabling medical practitioners to track vital signs and analyze drug efficacy. At the same time help them digitize complex processes, like genome sequencing and drug testing</span>
                </li>
                <li className="flex items-start">
                  <Film className="mr-2 h-6 w-6 mt-1 text-primary" />
                  <span><strong>Video/Graphic Processing:</strong> High-definition rendering, Video files coding, 4K/8K video processing, Graphics editing, CAD/CAM applications and more</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Focus Areas</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Artificial Intelligence</h3>
                <p className="text-muted-foreground">Advancing AI research and applications for real-world problems.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Database className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Big Data Analytics</h3>
                <p className="text-muted-foreground">Harnessing the power of data for insights and innovation.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MessageSquare className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Chatbot Development</h3>
                <p className="text-muted-foreground">Creating intelligent conversational interfaces for various domains.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Facilities</h2>
            <div className="prose prose-lg mx-auto dark:prose-invert">
              <h3 className="text-2xl font-bold mb-4">C-DAC Patna HPCaaS – Powered by NVIDIA</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="py-2 px-4 border-b">S No</th>
                      <th className="py-2 px-4 border-b">Topic</th>
                      <th className="py-2 px-4 border-b">NVIDIA T4 Tensor Core GPUs</th>
                      <th className="py-2 px-4 border-b">NVIDIA V100 Tensor Core GPUs</th>
                      <th className="py-2 px-4 border-b">NVIDIA A100 GPUs</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2 px-4 border-b">0</td>
                      <td className="py-2 px-4 border-b">0</td>
                      <td className="py-2 px-4 border-b">Most Advanced Inference Accelerator</td>
                      <t
d className="py-2 px-4 border-b">Universal Data Centre GPU</td>
                      <td className="py-2 px-4 border-b">Unprecedented acceleration at every scale</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">1</td>
                      <td className="py-2 px-4 border-b">PARAMETERS</td>
                      <td className="py-2 px-4 border-b">TESLA T4</td>
                      <td className="py-2 px-4 border-b">TESLA V100</td>
                      <td className="py-2 px-4 border-b">NVIDIA A100 GPUs</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">2</td>
                      <td className="py-2 px-4 border-b">BEST SUITABLE APPLICATION OR USAGE</td>
                      <td className="py-2 px-4 border-b">AI TRAINING /INFERENCE/DATA SCIENCES/HPC/GAMING</td>
                      <td className="py-2 px-4 border-b">AI TRAINING/DEEP LEARNING/DATA SCIENCE/HPC</td>
                      <td className="py-2 px-4 border-b">AI/DATA ANALYTICS AND HPC</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">3</td>
                      <td className="py-2 px-4 border-b">SINGLE PRECISION PERFORMANCE – FP32</td>
                      <td className="py-2 px-4 border-b">8.1 TFLOPS</td>
                      <td className="py-2 px-4 border-b">14 TFLOPS (PCIe)/15.7 TFLOPS (SXM2)</td>
                      <td className="py-2 px-4 border-b">19.5 TFLOPS</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">4</td>
                      <td className="py-2 px-4 border-b">HALF PRECISION PERFORMANCE- FP16</td>
                      <td className="py-2 px-4 border-b">65 TFLOPS</td>
                      <td className="py-2 px-4 border-b">112 TFLOPS (PCIe)/112 TFLOPS (SXM2)</td>
                      <td className="py-2 px-4 border-b">312 TFLOPS</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">5</td>
                      <td className="py-2 px-4 border-b">GPU MEMORY</td>
                      <td className="py-2 px-4 border-b">16GB</td>
                      <td className="py-2 px-4 border-b">32/16GB HBM2</td>
                      <td className="py-2 px-4 border-b">40GB HBM2</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">6</td>
                      <td className="py-2 px-4 border-b">MEMORY BANDWIDTH</td>
                      <td className="py-2 px-4 border-b">320 GB/SEC</td>
                      <td className="py-2 px-4 border-b">900 GB/SEC</td>
                      <td className="py-2 px-4 border-b">1555 GB/SEC</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">7</td>
                      <td className="py-2 px-4 border-b">SYSTEM INTERFACE/FORM FACTOR</td>
                      <td className="py-2 px-4 border-b">LOW PROFILE/PCI EXPRESS FORM FACTOR</td>
                      <td className="py-2 px-4 border-b">DUAL SLOT/FULL HEIGHT/PCI EXPRESS FORM FACTOR SXM2/NVLINK</td>
                      <td className="py-2 px-4 border-b">PCIE</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b">8</td>
                      <td className="py-2 px-4 border-b">POWER</td>
                      <td className="py-2 px-4 border-b">70 WATT</td>
                      <td className="py-2 px-4 border-b">250 WATT (PCIe)/300 WATT (SXM2)</td>
                      <td className="py-2 px-4 border-b">250 WATT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Contact Us</h2>
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    Centre for Development of Advanced Computing<br />
                    14th Floor, Biscomaun Tower,<br />
                    West Gandhi Maidan,<br />
                    Patna - 800001<br />
                    Bihar (India)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+91-612-2219021 / +91-8757570233</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:hpcai-pat@cdac.in" className="hover:underline">hpcai-pat@cdac.in</a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.5972814425554!2d85.13510661495!3d25.611700983703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4b0e3e54e1d2b792!2sBiscomaun%20Tower!5e0!3m2!1sen!2sin!4v1625147930281!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 C-DAC Patna. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Accessibility
          </Link>
        </nav>
      </footer>
    </div>
  )
}
