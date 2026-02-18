import { CheckCircle } from "lucide-react";

export default function RegistrationNotif({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-[10px] shadow-[0px_4px_15px_0px_rgba(0,0,0,0.25)] w-full max-w-[420px] p-8">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" strokeWidth={2} />
        </div>

        {/* Title */}
        <h1 className="font-['Poppins',sans-serif] font-bold text-[#163b56] text-xl text-center mb-4">
          Registration Successful!
        </h1>

        {/* Message */}
        <div className="font-['Poppins',sans-serif] text-[#163b56] text-[14px] text-center leading-relaxed mb-6">
          <p className="mb-3">
            Congratulations! You have successfully registered to the NAGA RESCUE application.
          </p>
          <p>
            Please wait for the email which contains the username that you can use to login.
          </p>
        </div>

        {/* Button */}
        <div className="flex justify-center gap-3">
          <button
            onClick={onClose}
            className="flex-1 h-[44px] bg-[#0b5ed0] rounded-[10px] font-['Poppins',sans-serif] font-bold text-white text-[14px] tracking-[0.2em] shadow-[0px_2px_8px_0px_rgba(11,94,208,0.3)] hover:bg-[#094ba8] transition-colors"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}