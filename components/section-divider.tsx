"use client"

export function SectionDivider() {
  return (
    <div className="relative my-20">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="bg-gradient-to-r from-transparent via-gray-100 to-transparent h-px w-full"></div>
      </div>
    </div>
  )
}
