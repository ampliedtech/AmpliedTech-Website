"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import Section from "@/components/section";
import ServicesGrid from "@/components/services-grid";
import CTABand from "@/components/cta-band";
import { useEffect } from "react";
import Image from "next/image";
import { 
  Code, 
  Cloud, 
  Shield, 
  Monitor, 
  Lightbulb, 
  Database,
  Cpu,
  Zap,
  CheckCircle
} from "lucide-react";

// Standardized Responsive Service Visual Components
function CustomSoftwareVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl overflow-hidden flex flex-col">
      {/* Header - Consistent across all components */}
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-xs sm:text-sm font-medium">software-development.js</span>
      </div>
      
      {/* Main Content - Consistent height and spacing */}
      <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 space-y-1 sm:space-y-2 min-h-0">
        <div className="text-blue-400 text-xs sm:text-sm font-mono leading-relaxed">
          function <span className="text-yellow-400">buildApp</span>() {`{`}
        </div>
        <div className="text-gray-300 text-xs sm:text-sm font-mono ml-2 sm:ml-4 leading-relaxed">
          return <span className="text-green-400">"Amazing!"</span>;
        </div>
        <div className="text-blue-400 text-xs sm:text-sm font-mono leading-relaxed">{`}`}</div>
        <div className="text-gray-500 text-xs sm:text-sm font-mono leading-relaxed">// TaaS Development</div>
        <div className="text-gray-500 text-xs sm:text-sm font-mono leading-relaxed">// Ongoing Support</div>
      </div>

      {/* Footer Grid - Consistent across all components */}
      <div className="px-3 py-2 sm:px-4 sm:py-3 grid grid-cols-2 lg:grid-cols-3 gap-1.5 sm:gap-2 border-t border-gray-700">
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-blue-500/20 rounded-md sm:rounded-lg">
          <Code className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400 flex-shrink-0" />
          <span className="text-blue-400 text-xs font-medium truncate">Planning</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-green-500/20 rounded-md sm:rounded-lg">
          <Database className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 flex-shrink-0" />
          <span className="text-green-400 text-xs font-medium truncate">Database</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-purple-500/20 rounded-md sm:rounded-lg">
          <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400 flex-shrink-0" />
          <span className="text-purple-400 text-xs font-medium truncate">Development</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-yellow-500/20 rounded-md sm:rounded-lg">
          <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
          <span className="text-yellow-400 text-xs font-medium truncate">Deploy</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-emerald-500/20 rounded-md sm:rounded-lg lg:col-span-1 col-span-2">
          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
          <span className="text-emerald-400 text-xs font-medium truncate">Maintenance</span>
        </div>
      </div>
    </div>
  );
}

function DataAnalyticsVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-blue-100 rounded-xl overflow-hidden flex flex-col">
      {/* Header - Consistent structure */}
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 border-b border-indigo-200 bg-white/50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>
        <span className="text-gray-700 text-xs sm:text-sm font-medium">Analytics Dashboard</span>
      </div>

      {/* Main Content - Consistent spacing */}
      <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 min-h-0">
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 h-full">
          {/* Revenue Chart */}
          <div className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 shadow-sm flex flex-col">
            <div className="text-xs font-medium text-gray-600 mb-1 sm:mb-2 truncate">Revenue</div>
            <div className="flex-1 flex items-end justify-center space-x-0.5 sm:space-x-1 min-h-0">
              {[40, 60, 45, 80, 70, 90].map((height, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t flex-1 max-w-2"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>

          {/* Engagement Chart */}
          <div className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 shadow-sm flex flex-col">
            <div className="text-xs font-medium text-gray-600 mb-1 sm:mb-2 truncate">Engagement</div>
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="w-full h-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded flex items-center justify-center">
                <Database className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
              </div>
            </div>
          </div>

          {/* Data Sources */}
          <div className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 shadow-sm flex flex-col">
            <div className="text-xs font-medium text-gray-600 mb-1 sm:mb-2 truncate">Sources</div>
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Database className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
            </div>
          </div>

          {/* AI Predictions */}
          <div className="bg-white rounded-md sm:rounded-lg p-2 sm:p-3 shadow-sm flex flex-col">
            <div className="text-xs font-medium text-gray-600 mb-1 sm:mb-2 truncate">AI Predictions</div>
            <div className="flex-1 flex items-center justify-center min-h-0">
              <div className="w-full h-full bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded flex items-center justify-center">
                <Cpu className="w-4 h-4 sm:w-6 sm:h-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Consistent structure */}
      <div className="px-3 py-2 sm:px-4 sm:py-3 grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 border-t border-indigo-200 bg-white/30">
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-blue-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
          <span className="text-blue-700 text-xs font-medium truncate">Charts</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-green-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
          <span className="text-green-700 text-xs font-medium truncate">Analytics</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-purple-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
          <span className="text-purple-700 text-xs font-medium truncate">ML Models</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-orange-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
          <span className="text-orange-700 text-xs font-medium truncate">AI/ML</span>
        </div>
      </div>
    </div>
  );
}

function DigitalTransformationVisual() {
  const phases = [
    { title: "Assessment", icon: Monitor, color: "from-blue-500 to-blue-600" },
    { title: "Strategy", icon: Lightbulb, color: "from-green-500 to-green-600" },
    { title: "Implementation", icon: Zap, color: "from-purple-500 to-purple-600" },
    { title: "Optimization", icon: CheckCircle, color: "from-emerald-500 to-emerald-600" }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl overflow-hidden flex flex-col">
      {/* Header - Consistent structure */}
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 border-b border-gray-200 bg-white/50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>
        <span className="text-gray-700 text-xs sm:text-sm font-medium">Transformation Process</span>
      </div>

      {/* Main Content - Consistent spacing */}
      <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 min-h-0">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 h-full">
          {phases.map((phase, index) => (
            <div key={index} className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 p-2 bg-white/50 rounded-md sm:rounded-lg">
              <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-sm`}>
                <phase.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-xs font-medium text-gray-700 text-center truncate w-full">{phase.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Consistent structure */}
      <div className="px-3 py-2 sm:px-4 sm:py-3 grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 border-t border-gray-200 bg-white/30">
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-blue-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
          <span className="text-blue-700 text-xs font-medium truncate">Planning</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-green-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
          <span className="text-green-700 text-xs font-medium truncate">Strategy</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-purple-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
          <span className="text-purple-700 text-xs font-medium truncate">Execute</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-emerald-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
          <span className="text-emerald-700 text-xs font-medium truncate">Optimize</span>
        </div>
      </div>
    </div>
  );
}

function TaaSVisual() {
  const services = [
    { icon: Code, title: "Development", color: "from-blue-500 to-blue-600" },
    { icon: Cloud, title: "Cloud", color: "from-green-500 to-green-600" },
    { icon: Shield, title: "Security", color: "from-red-500 to-red-600" },
    { icon: Monitor, title: "Monitoring", color: "from-purple-500 to-purple-600" }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-xl overflow-hidden flex flex-col">
      {/* Header - Consistent structure */}
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 border-b border-white/20 bg-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
        </div>
        <span className="text-white text-xs sm:text-sm font-medium">Technology as a Service</span>
      </div>

      {/* Main Content - Consistent spacing */}
      <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 min-h-0 flex flex-col items-center justify-center space-y-2 sm:space-y-3">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-sm sm:text-lg font-bold text-indigo-900">TaaS</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 w-full max-w-xs">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-1 p-2 bg-white/10 rounded-md sm:rounded-lg backdrop-blur-sm">
              <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                <service.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>
              <span className="text-white text-xs font-medium text-center truncate w-full">{service.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Consistent structure */}
      <div className="px-3 py-2 sm:px-4 sm:py-3 grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 border-t border-white/20 bg-white/5">
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-blue-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
          <span className="text-blue-200 text-xs font-medium truncate">Dev</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-green-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
          <span className="text-green-200 text-xs font-medium truncate">Cloud</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-red-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"></div>
          <span className="text-red-200 text-xs font-medium truncate">Security</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-purple-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
          <span className="text-purple-200 text-xs font-medium truncate">Monitor</span>
        </div>
      </div>
    </div>
  );
}

function CybersecurityVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-red-900 via-gray-900 to-red-900 rounded-xl overflow-hidden flex flex-col">
      {/* Header - Consistent structure */}
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 border-b border-red-800 bg-red-900/50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
        </div>
        <span className="text-white text-xs sm:text-sm font-medium">Security Dashboard</span>
      </div>

      {/* Main Content - Consistent spacing */}
      <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 min-h-0 flex flex-col items-center justify-center space-y-2 sm:space-y-3">
        <div className="w-12 h-12 sm:w-16 sm:h-16 text-green-400">
          <Shield className="w-full h-full" />
        </div>
        
        <div className="text-center space-y-1">
          <div className="text-white text-xs sm:text-sm font-medium">Security Status: ACTIVE</div>
          <div className="text-green-400 text-xs">All systems protected</div>
        </div>
        
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 w-full max-w-xs">
          <div className="flex flex-col items-center space-y-1 p-2 bg-green-500/20 rounded-md sm:rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-400 text-xs font-medium text-center truncate w-full">Detection</span>
          </div>
          <div className="flex flex-col items-center space-y-1 p-2 bg-blue-500/20 rounded-md sm:rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-blue-400 text-xs font-medium text-center truncate w-full">Firewall</span>
          </div>
          <div className="flex flex-col items-center space-y-1 p-2 bg-purple-500/20 rounded-md sm:rounded-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-400 text-xs font-medium text-center truncate w-full">Encryption</span>
          </div>
          <div className="flex flex-col items-center space-y-1 p-2 bg-yellow-500/20 rounded-md sm:rounded-lg">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-yellow-400 text-xs font-medium text-center truncate w-full">Monitor</span>
          </div>
        </div>
      </div>

      {/* Footer - Consistent structure */}
      <div className="px-3 py-2 sm:px-4 sm:py-3 grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 border-t border-red-800 bg-red-900/30">
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-green-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
          <span className="text-green-200 text-xs font-medium truncate">Secure</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-blue-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
          <span className="text-blue-200 text-xs font-medium truncate">Protected</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-purple-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
          <span className="text-purple-200 text-xs font-medium truncate">Encrypted</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-yellow-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
          <span className="text-yellow-200 text-xs font-medium truncate">Monitored</span>
        </div>
      </div>
    </div>
  );
}

function CloudInfrastructureVisual() {
  const clouds = [
    { name: "AWS", color: "from-orange-500 to-yellow-500" },
    { name: "Azure", color: "from-blue-500 to-cyan-500" },
    { name: "GCP", color: "from-green-500 to-emerald-500" }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-sky-100 to-blue-200 rounded-xl overflow-hidden flex flex-col">
      {/* Header - Consistent structure */}
      <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-3 border-b border-blue-200 bg-white/50">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-700 text-xs sm:text-sm font-medium">Cloud Infrastructure</span>
      </div>

      {/* Main Content - Consistent spacing */}
      <div className="flex-1 px-3 py-2 sm:px-4 sm:py-3 min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-3 h-full">
          {clouds.map((cloud, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${cloud.color} rounded-md sm:rounded-lg p-3 sm:p-4 flex flex-col items-center justify-center text-white shadow-sm`}
            >
              <Cloud className="w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2" />
              <span className="text-xs sm:text-sm font-medium">{cloud.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer - Consistent structure */}
      <div className="px-3 py-2 sm:px-4 sm:py-3 grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2 border-t border-blue-200 bg-white/30">
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-blue-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
          <span className="text-blue-700 text-xs font-medium truncate">Docker</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-green-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
          <span className="text-green-700 text-xs font-medium truncate">Kubernetes</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-purple-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
          <span className="text-purple-700 text-xs font-medium truncate">Terraform</span>
        </div>
        <div className="flex items-center space-x-1.5 sm:space-x-2 px-2 py-1.5 sm:px-3 sm:py-2 bg-orange-500/20 rounded-md sm:rounded-lg">
          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
          <span className="text-orange-700 text-xs font-medium truncate">CI/CD</span>
        </div>
      </div>
    </div>
  );
}

// Function to get service-specific animated visuals
function getServiceVisual(serviceTitle: string) {
  switch (serviceTitle) {
    case "Custom Software Development":
      return <CustomSoftwareVisual />;
    case "Data Analytics & AI":
      return <DataAnalyticsVisual />;
    case "Digital Transformation":
      return <DigitalTransformationVisual />;
    case "Technology-as-a-Service (TaaS)":
      return <TaaSVisual />;
    case "Cybersecurity Solutions":
      return <CybersecurityVisual />;
    case "Cloud Infrastructure & DevOps":
      return <CloudInfrastructureVisual />;
    default:
      return (
        <div className="w-full h-full bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-2xl flex items-center justify-center">
          <div className="w-12 h-12 bg-brand-primary rounded-lg animate-bounce"></div>
        </div>
      );
  }
}

const detailedServices = [
  {
    title: "Custom Software Development",
    description: "We build scalable, secure applications using modern technologies and agile methodologies. Our ongoing development process ensures continuous improvement and rapid delivery with dedicated team support.",
    features: [
      "Full-stack web and mobile applications",
      "Microservices architecture design",
      "API development and integration",
      "Database design and optimization",
      "Ongoing code review and quality assurance",
      "Continuous integration and deployment",
      "Regular feature updates and maintenance"
    ],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker"]
  },
  {
    title: "Data Analytics & AI",
    description: "Transform your data into actionable insights with our comprehensive data analytics and AI solutions. We provide ongoing data management, analysis, and AI model development to drive business intelligence.",
    features: [
      "Data engineering and pipeline development",
      "Machine learning model development",
      "Business intelligence dashboards",
      "Predictive analytics solutions",
      "Data visualization and reporting",
      "Ongoing model optimization and updates"
    ],
    technologies: ["Python", "TensorFlow", "PyTorch", "Pandas", "Scikit-learn", "Tableau"]
  },
  {
    title: "Digital Transformation",
    description: "Strategic technology planning embedded in ongoing execution to drive your digital transformation. We help you make informed decisions about your technology investments with continuous guidance.",
    features: [
      "Technology strategy development",
      "Process optimization and automation",
      "Legacy system modernization",
      "Digital roadmap planning",
      "Change management support",
      "Ongoing strategic guidance"
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Ansible"]
  },
  {
    title: "Technology-as-a-Service (TaaS)",
    description: "Our flagship offering providing ongoing technology partnership with predictable costs, dedicated team availability, and continuous innovation. Focus on your business while we handle your technology needs.",
    features: [
      "Dedicated technology team",
      "Predictable monthly costs",
      "Ongoing support and maintenance",
      "Regular technology updates",
      "Proactive monitoring and optimization",
      "Continuous improvement and innovation"
    ],
    technologies: ["Full Stack", "Cloud Platforms", "DevOps", "Security", "Monitoring", "AI/ML"]
  },
  {
    title: "Cybersecurity Solutions",
    description: "Continuous threat monitoring and compliance management to protect your business and data. Stay secure and compliant with our comprehensive security services and ongoing protection.",
    features: [
      "Security assessment and auditing",
      "Threat detection and response",
      "Compliance management (SOC2, ISO)",
      "Penetration testing",
      "Incident response planning",
      "Ongoing security monitoring"
    ],
    technologies: ["SIEM", "EDR", "WAF", "VPN", "PKI", "Security Frameworks"]
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Seamless cloud migration, automation, and rapid deployment for faster time-to-market. Modernize your infrastructure with our cloud and DevOps expertise and ongoing optimization.",
    features: [
      "Cloud migration and optimization",
      "CI/CD pipeline setup",
      "Infrastructure as Code (IaC)",
      "Container orchestration",
      "Monitoring and logging",
      "Ongoing cost optimization"
    ],
    technologies: ["AWS", "Azure", "GCP", "Kubernetes", "Docker", "Terraform"]
  }
];

export default function ServicesPage() {
  useEffect(() => {
    // Handle hash navigation when coming from homepage
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }, 100); // Small delay to ensure page is fully loaded
        }
      }
    };

    // Run on mount and when hash changes
    handleHashNavigation();
    window.addEventListener('hashchange', handleHashNavigation);

    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SiteHeader />
      
      <main>
        {/* Hero Section */}
        <Section background="ink" className="pt-32">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-textd">
              Our Services
            </h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto"  >
              From custom software development to cloud infrastructure and cybersecurity — we provide comprehensive technology solutions with ongoing partnership and support.
            </p>
          </div>
        </Section>

        {/* Services Overview */}
        <Section background="surface">
          <ServicesGrid />
        </Section>

        {/* Detailed Services */}
        <Section background="light">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-text" style={{ color: '#044078' }}>
                Detailed Service Offerings
              </h2>
              <p className="text-xl text-brand-secondary max-w-3xl mx-auto" style={{ color: '#034078' }}>
                Explore our comprehensive range of Technology-as-a-Service offerings designed to grow with your business
              </p>
            </div>

            <div className="space-y-16">
              {detailedServices.map((service, index) => (
                <div
                  key={service.title}
                  id={service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}
                  className="max-w-6xl mx-auto"
                  style={{ color: '#034078' }}
                >
                  <div className="text-center space-y-8 mb-12">
                    <h3 className="text-4xl lg:text-4xl font-bold text-text" style={{ color: '#044078' }}>
                      {service.title}
                    </h3>
                    <p className="text-xl text-brand-secondary max-w-4xl mx-auto leading-relaxed" style={{ color: '#034078' }}>
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="space-y-6 text-center lg:text-left">
                        <div className="space-y-4">
                          <h4 className="text-2xl font-semibold text-text" style={{ color: '#044078' }}>What we deliver:</h4>
                          <ul className="space-y-3">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start space-x-3" style={{ color: '#034078' }}>
                                <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="text-brand-secondary" style={{ color: '#034078' }}>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h4 className="text-2xl font-semibold text-text" style={{ color: '#044078' }}>Technologies we use:</h4>
                          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {service.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-4 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="w-full h-80 rounded-2xl border border-brand-secondary/20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
                        {/* Service-specific animated content */}
                        <div className="w-full h-full relative">
                          {getServiceVisual(service.title)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <CTABand />
      </main>
      
      <SiteFooter />
    </div>
  );
}
