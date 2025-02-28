"use client";

import { Twitter, Linkedin, FileText, Globe, Check, Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import HowItWorksModal from "./components/HowItWorksModal";
import ApplyModal from "./components/ApplyModal";

// Mock data for the prototype
const jobs = [
  { title: "Senior Frontend Engineer", department: "Engineering", location: "Remote" },
  { title: "Backend Developer", department: "Engineering", location: "San Francisco, CA" },
  { title: "Product Designer", department: "Design", location: "New York, NY" },
  { title: "Growth Marketing Manager", department: "Marketing", location: "Remote" },
  { title: "DevOps Engineer", department: "Engineering", location: "Austin, TX" },
];

const candidates = [
  {
    name: "Alex Johnson",
    role: "Senior Frontend Engineer",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    currentAmount: 2100,
    maxAmount: 10000,
    twitter: "https://twitter.com/alexj",
    linkedin: "https://linkedin.com/in/alexjohnson",
    resume: "/resume-alex.pdf",
    website: "https://example.com"
  },
  {
    name: "Sarah Chen",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    currentAmount: 5400,
    maxAmount: 10000,
    twitter: "https://twitter.com/sarahc",
    linkedin: "https://linkedin.com/in/sarahchen",
    resume: "/resume-sarah.pdf",
    website: "https://example.com"
  },
  {
    name: "Michael Rodriguez",
    role: "Product Designer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    currentAmount: 7800,
    maxAmount: 10000,
    twitter: "https://twitter.com/michaelr",
    linkedin: "https://linkedin.com/in/michaelrodriguez",
    resume: "/resume-michael.pdf",
    website: "https://example.com"
  },
  {
    name: "Emily Taylor",
    role: "Growth Marketing Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    currentAmount: 1500,
    maxAmount: 10000,
    twitter: "https://twitter.com/emilyt",
    linkedin: "https://linkedin.com/in/emilytaylor",
    resume: "/resume-emily.pdf",
    website: "https://example.com"
  },
  {
    name: "David Kim",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    currentAmount: 3200,
    maxAmount: 10000,
    twitter: "https://twitter.com/davidk",
    linkedin: "https://linkedin.com/in/davidkim",
    resume: "/resume-david.pdf",
    website: "https://example.com"
  },
];

const closedMarkets = [
  {
    name: "James Wilson",
    role: "Senior Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    result: "YES",
    color: "text-green-500",
    bgColor: "bg-green-50",
    reason: "Joined our team",
    icon: Check
  },
  {
    name: "Olivia Martinez",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    result: "N/A",
    color: "text-gray-500",
    bgColor: "bg-gray-100",
    reason: "Declined an interview",
    icon: Clock
  },
  {
    name: "Robert Lee",
    role: "Data Scientist",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    result: "N/A",
    color: "text-gray-500",
    bgColor: "bg-gray-100",
    reason: "Declined an offer",
    icon: Clock
  }
];

export default function Home() {
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsApplyOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex justify-between h-14">
            <div className="flex items-center">
              <span className="text-lg font-bold text-indigo-600">TechVision</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#jobs" className="text-gray-600 hover:text-indigo-600 text-sm">Jobs</a>
              <a href="#markets" className="text-gray-600 hover:text-indigo-600 text-sm">Markets</a>
              <button className="bg-indigo-600 text-white px-3 py-1.5 rounded-md hover:bg-indigo-700 text-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-indigo-50 py-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Join Our Team
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500">
              We&apos;re building the future of technology. Come be a part of something special.
            </p>
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div id="jobs" className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-sm text-indigo-600 font-semibold tracking-wide uppercase">Open Positions</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              Join Our Team
            </p>
            <p className="mt-2 max-w-lg mx-auto text-sm text-gray-500">
              Explore our current openings and find your next opportunity.
            </p>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {jobs.map((job, index) => (
                <li key={index}>
                  <div className="px-4 py-3 sm:px-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-base font-medium text-gray-900">{job.title}</h3>
                      <button
                        className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                        onClick={() => handleApply(job.title)}
                      >
                        Apply
                      </button>
                    </div>
                    <div className="mt-1 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-xs text-gray-500">
                          {job.department}
                        </p>
                        <p className="mt-1 flex items-center text-xs text-gray-500 sm:mt-0 sm:ml-4">
                          {job.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Markets Section */}
      <div id="markets" className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-sm text-indigo-600 font-semibold tracking-wide uppercase">Interview Markets</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              Back Promising Candidates
            </p>
            <p className="mt-2 max-w-lg mx-auto text-sm text-gray-500">
              Support candidates you believe in and earn rewards when they succeed.
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <button
              onClick={() => setIsHowItWorksOpen(true)}
              className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              How it Works
            </button>
          </div>

          <div className="space-y-3">
            {[...candidates].sort((a, b) => b.currentAmount - a.currentAmount).map((candidate, index) => (
              <div key={index} className="bg-white shadow-sm overflow-hidden sm:rounded-md border border-gray-100">
                <div className="px-4 py-3 sm:px-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 relative mr-3">
                      <Image
                        className="rounded-full object-cover"
                        src={candidate.image}
                        alt={candidate.name}
                        fill
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{candidate.name}</h3>
                      <p className="text-xs text-gray-500">{candidate.role}</p>
                      <div className="flex space-x-2 mt-1">
                        <a href={candidate.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                          <Twitter size={14} />
                        </a>
                        <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                          <Linkedin size={14} />
                        </a>
                        <a href={candidate.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
                          <Globe size={14} />
                        </a>
                        <a href={candidate.resume} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700">
                          <FileText size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-32">
                      <div className="flex justify-between text-xs text-gray-500 mb-1">
                        <span>${(candidate.currentAmount / 1000).toFixed(1)}k</span>
                        <span>${(candidate.maxAmount / 1000).toFixed(1)}k</span>
                      </div>
                      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-indigo-600 rounded-full"
                          style={{ width: `${(candidate.currentAmount / candidate.maxAmount) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700">
                      Refer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recently Closed Markets Section */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-sm text-indigo-600 font-semibold tracking-wide uppercase">Recently Closed Markets</h2>
            <p className="mt-2 text-2xl font-bold text-gray-900">
              Past Results
            </p>
            <p className="mt-2 max-w-lg mx-auto text-sm text-gray-500">
              See the outcomes of previously closed markets.
            </p>
          </div>

          <div className="space-y-3">
            {closedMarkets.map((market, index) => (
              <div key={index} className="bg-white shadow-sm overflow-hidden sm:rounded-md border border-gray-100">
                <div className="px-4 py-3 sm:px-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 relative mr-3">
                      <Image
                        className="rounded-full object-cover"
                        src={market.image}
                        alt={market.name}
                        fill
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{market.name}</h3>
                      <p className="text-xs text-gray-500">{market.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className={`${market.bgColor} px-4 py-3 rounded-md min-w-40`}>
                      <div className="flex flex-col items-center">
                        <span className={`font-medium ${market.color}`}>{market.result}</span>
                        <p className="text-xs text-gray-500 mt-1">{market.reason}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-base font-bold mb-3">TechVision</h3>
              <p className="text-sm text-gray-300">
                Building the future of technology, one innovation at a time.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-1">
                <li><a href="#jobs" className="text-xs text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#markets" className="text-xs text-gray-300 hover:text-white">Interview Markets</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-3">Contact</h3>
              <p className="text-xs text-gray-300">
                123 Tech Avenue<br />
                San Francisco, CA 94107<br />
                contact@techvision.com
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-center text-xs text-gray-300">
            <p>© 2024 TechVision. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* How It Works Modal */}
      <HowItWorksModal
        isOpen={isHowItWorksOpen}
        onClose={() => setIsHowItWorksOpen(false)}
      />

      {/* Apply Modal */}
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        jobTitle={selectedJob}
      />
    </div>
  );
}
