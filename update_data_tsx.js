const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/common/lib/data.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `    description: (
      <div className= "flex flex-col gap-4 mt-2" >
      <div>
      <div className="flex items-center gap-2 mb-2 font-medium italic">
        Kanoon: LegalTech Platform
      <a href = "https://play.google.com/store/apps/details?id=com.ruaa2458.kanoon" target = "_blank" rel = "noopener noreferrer" className = "hover:opacity-75 transition-opacity">
              < svg xmlns = "http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "currentColor" > <path d="M17.523 15.3414c-.011.0191-.0219.0381-.0318.0573l-1.9961 3.4566c-.1913.3324-.6163.4475-.9487.2562-.3324-.1913-.4475-.6163-.2562-.9487l1.9161-3.3182c-2.3155-1.0967-3.966-3.3337-4.1837-5.996h-.0442c-.2177 2.6623-1.8682 4.8993-4.1837 5.996l1.9161 3.3182c.1913.3324.0762.7574-.2562.9487-.3324.1913-.7574.0762-.9487-.2562l-1.9961-3.4566c-.0099-.0192-.0208-.0382-.0318-.0573-2.6789-1.6366-4.5269-4.5422-4.8089-7.9157h18.665c-.282 3.3735-2.129 6.2791-4.811 7.9157zm-10.435-5.9963c-.5951 0-1.0776-.4825-1.0776-1.0776 0-.5951.4825-1.0776 1.0776-1.0776.5951 0 1.0776.4825 1.0776 1.0776 0 .5951-.4825 1.0776-1.0776 1.0776zm9.824 0c-.5951 0-1.0776-.4825-1.0776-1.0776 0-.5951.4825-1.0776 1.0776-1.0776.5951 0 1.0776.4825 1.0776 1.0776 0 .5951-.4825 1.0776-1.0776 1.0776zm-4.912-1.7451v-3.7711c2.149 0 4.0984.8587 5.5186 2.2536l1.2482-1.2482c-1.7483-1.7247-4.1481-2.7936-6.7668-2.7936-2.6187 0-5.0185 1.0689-6.7668 2.7936l1.2482 1.2482c1.4202-1.3949 3.3696-2.2536 5.5186-2.2536v3.7711h-9.3334v1.7892h18.6668v-1.7892h-9.3334z" /> </svg>
77:   </a>
78:   < a href = "https://apps.apple.com/in/app/kanoon/id6748016874" target = "_blank" rel = "noopener noreferrer" className = "hover:opacity-75 transition-opacity" >
79:   <svg xmlns="http://www.w3.org/2000/svg" width = "16" height = "16" viewBox = "0 0 24 24" fill = "currentColor" > <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91 1.63.16 3.01.69 3.94 1.74-3.5 2.44-2.92 7.57.85 9.07-.63 1.55-1.35 3.03-2.03 3.85zm-3.05-18.06c-.85 1.03-2.08 1.72-3.24 1.72-.05-1.12.39-2.21 1.1-3.05.86-1.02 2.08-1.71 3.24-1.72.06 1.13-.38 2.22-1.1 3.05z" /> </svg>
80:   </a>
81:   </div>
82:   < ul className = "list-disc pl-5 space-y-1 text-sm" >
83:   <li>Designed and owned the end - to - end mobile architecture for Android and iOS, implementing JWT - based authentication, role - based access control, and streamlined onboarding workflows, supported 500 + active users and 1,000 + verified lawyers in production.</li>
84:     < li > Improved user engagement and retention by 40–45 % by delivering real - time push notifications, multi - parameter legal discovery(case type, jurisdiction, status), and optimized filtering and query execution paths.</li>
85:       < li > Led cross - platform development using React Native (Expo) and Ant Design, and built RESTful APIs with Django, refined MySQL schema design and indexing, reducing average API response times by 35–40 %.</li>
86:         </ul>
87:         </div>
88:         < div >
89:         <div className="mb-2 font-medium italic" > Tareek: Legal Case Lifecycle Management </div>
90:           < ul className = "list-disc pl-5 space-y-1 text-sm" >
91:             <li>Architected and delivered a full - scale Case Lifecycle Management(CLM) platform, digitizing end - to - end legal operations from case creation to closure with a 99.9 % crash - free session rate.</li>
92:               < li > Built a high - throughput PostgreSQL backend using Django REST Framework, applying strategic indexing and query optimization to reduce API latency by 45 % under real - world workloads.</li>
93:                 < li > Implemented secure payment and automation flows(Razorpay integration, event - driven status updates), improving operational reliability and reducing manual intervention.</li>
94:                   </ul>
95:                   </div>
96:                   </div>
97:     ),`.replace(/^[0-9]+: /gm, '');

const replacementStr = `    description: (
      <div className="flex flex-col gap-6 mt-2">
        <div>
          <div className="flex items-center gap-3 mb-2 font-semibold text-gray-900 dark:text-gray-100">
            Kanoon: LegalTech Platform
            <div className="flex items-center gap-2">
              <a href="https://play.google.com/store/apps/details?id=com.ruaa2458.kanoon" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                <Smartphone className="w-5 h-5" />
              </a>
              <a href="https://apps.apple.com/in/app/kanoon/id6748016874" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors">
                <Apple className="w-5 h-5" />
              </a>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Designed and owned the end-to-end mobile architecture for Android and iOS using React Native and Expo. I implemented JWT-based authentication, role-based access control, and streamlined onboarding workflows, supporting 500+ active users and 1,000+ verified lawyers in production. By delivering real-time push notifications and a multi-parameter legal discovery engine (filtering by case type, jurisdiction, and status), I improved user engagement and retention by 40–45%. Furthermore, I built RESTful APIs with Django and refined the MySQL schema and indexing, successfully reducing average API response times by 35–40%.
          </p>
        </div>
        
        <div>
          <div className="mb-2 font-semibold text-gray-900 dark:text-gray-100">Tareek: Legal Case Lifecycle Management</div>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            Architected and delivered a full-scale Case Lifecycle Management (CLM) platform, digitizing end-to-end legal operations from case creation to closure with a 99.9% crash-free session rate. I built a high-throughput PostgreSQL backend using the Django REST Framework, applying strategic indexing and query optimization to reduce API latency by 45% under real-world workloads. Additionally, I implemented secure payment and automation flows via Razorpay integration and event-driven status updates, significantly improving operational reliability and reducing manual intervention.
          </p>
        </div>
      </div>
    ),`;

content = content.replace(targetStr, replacementStr);
fs.writeFileSync(filePath, content, 'utf8');
console.log("Replaced successfully!");
