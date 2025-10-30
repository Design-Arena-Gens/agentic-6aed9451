'use client'

import { useState } from 'react'
import { FileText, MessageCircle, Upload, ChevronRight, CheckCircle, Clock, AlertCircle, DollarSign, Home, TrendingUp } from 'lucide-react'

export default function LoanHub() {
  const [time, setTime] = useState(new Date())

  // Update time every minute
  useState(() => {
    const timer = setInterval(() => setTime(new Date()), 60000)
    return () => clearInterval(timer)
  })

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      {/* Phone Container */}
      <div className="relative w-full max-w-[380px] h-[800px] bg-black rounded-[50px] shadow-2xl border-8 border-gray-800 overflow-hidden">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>

        {/* Screen Content */}
        <div className="h-full bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg pt-12 pb-8 px-6 overflow-y-auto">
          {/* Status Bar */}
          <div className="flex justify-between items-center text-white text-xs mb-8">
            <span className="font-semibold">{formatTime(time)}</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2 border border-white rounded-sm flex items-center justify-end pr-[1px]">
                <div className="w-2 h-1 bg-white rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Date */}
          <div className="text-center mb-8">
            <h1 className="text-white text-5xl font-light mb-1">{time.getDate()}</h1>
            <p className="text-gray-400 text-sm">{formatDate(time)}</p>
          </div>

          {/* App Icon and Name */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-20 h-20 bg-gradient-to-br from-accent-purple to-accent-cyan rounded-2xl shadow-lg flex items-center justify-center mb-3 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20"></div>
              <DollarSign className="w-10 h-10 text-white z-10" strokeWidth={2.5} />
            </div>
            <h2 className="text-white text-xl font-semibold tracking-wide">LoanHub</h2>
          </div>

          {/* Widgets Grid */}
          <div className="space-y-4">
            {/* Loan Approvals Widget */}
            <div className="bg-dark-surface-light/80 backdrop-blur-xl rounded-3xl p-5 border border-gray-700/30 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-green to-emerald-600 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Loan Approvals</h3>
                    <p className="text-gray-400 text-xs">3 active applications</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-500" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between bg-dark-surface/50 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent-green" />
                    <div>
                      <p className="text-white text-sm font-medium">Home Loan</p>
                      <p className="text-gray-400 text-xs">$450,000</p>
                    </div>
                  </div>
                  <span className="text-accent-green text-xs font-semibold">Approved</span>
                </div>

                <div className="flex items-center justify-between bg-dark-surface/50 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <div>
                      <p className="text-white text-sm font-medium">Auto Loan</p>
                      <p className="text-gray-400 text-xs">$35,000</p>
                    </div>
                  </div>
                  <span className="text-yellow-500 text-xs font-semibold">Pending</span>
                </div>

                <div className="flex items-center justify-between bg-dark-surface/50 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent-cyan" />
                    <div>
                      <p className="text-white text-sm font-medium">Refinance</p>
                      <p className="text-gray-400 text-xs">$280,000</p>
                    </div>
                  </div>
                  <span className="text-accent-cyan text-xs font-semibold">In Review</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              {/* Chat Widget */}
              <div className="bg-gradient-to-br from-accent-purple to-purple-700 rounded-3xl p-5 shadow-xl relative overflow-hidden group active:scale-95 transition-transform">
                <div className="absolute inset-0 bg-white/0 group-active:bg-white/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1">Chat</h3>
                  <p className="text-purple-200 text-xs">Talk to an agent</p>
                  <div className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Submit Documents Widget */}
              <div className="bg-gradient-to-br from-accent-cyan to-blue-600 rounded-3xl p-5 shadow-xl relative overflow-hidden group active:scale-95 transition-transform">
                <div className="absolute inset-0 bg-white/0 group-active:bg-white/10 transition-colors"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-1">Documents</h3>
                  <p className="text-cyan-200 text-xs">Submit closing docs</p>
                </div>
              </div>
            </div>

            {/* Status Summary Widget */}
            <div className="bg-dark-surface-light/80 backdrop-blur-xl rounded-3xl p-5 border border-gray-700/30 shadow-xl">
              <h3 className="text-white font-semibold text-base mb-4">Quick Stats</h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <p className="text-accent-green text-2xl font-bold">2</p>
                  <p className="text-gray-400 text-xs mt-1">Approved</p>
                </div>
                <div className="text-center border-x border-gray-700/50">
                  <p className="text-yellow-500 text-2xl font-bold">1</p>
                  <p className="text-gray-400 text-xs mt-1">Pending</p>
                </div>
                <div className="text-center">
                  <p className="text-accent-cyan text-2xl font-bold">3</p>
                  <p className="text-gray-400 text-xs mt-1">Documents</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom spacing for dock area */}
          <div className="h-20"></div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
      </div>
    </div>
  )
}
