"use client";

import { Button } from "@/components/ui/button";
import { Success } from "@/public/icons";
import { AlertTriangle, X } from "lucide-react";
import { useEffect, useState } from "react";
type ConfirmModalProps = {
  onConfirm: (apiKeyName: string) => void;
  onClose: () => void;
  header: string;
  text: string;
};

export function ConfirmModal({
  onConfirm,
  onClose,
  text,
  header,
}: ConfirmModalProps) {
  const [apiKeyName, setApiKeyName] = useState("");

  return (
    <div className="w-[348px] h-[320px] p-6 rounded-xl bg-white shadow-md text-center space-y-4 flex flex-col justify-center items-center">
      <AlertTriangle className="mx-auto text-blue-500" />
      <p className="text-lg font-medium">{header}</p>
      <p className="text-sm text-gray-500">{text}</p>
      <input
        type="text"
        value={apiKeyName}
        onChange={(e) => setApiKeyName(e.target.value)}
        placeholder="Enter API key name"
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full max-w-[280px] focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-center gap-4 mt-2">
        <Button
          className="w-[116px] h-[40px]"
          onClick={onClose}
          variant="outline"
        >
          No
        </Button>
        <Button
          className="w-[116px] h-[40px] bg-dash_blue"
          onClick={() => onConfirm(apiKeyName)}
          disabled={!apiKeyName.trim()}
        >
          Yes
        </Button>
      </div>
    </div>
  );
}
type loadingModalProps = {
  text1: string;
  text2?: string;
};
export function LoadingModal({ text1, text2 }: loadingModalProps) {
  return (
    <div className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="w-[348px] h-[287px] p-6 rounded-xl bg-white dark:bg-black shadow-md text-center space-y-4 flex flex-col justify-center items-center">
        <CustomLoader />
        <p className="text-lg text-black dark:text-white">{text1}</p>
        {text2 && (
          <p className="text-lg text-black dark:text-white mt-2">{text2}</p>
        )}
      </div>
    </div>
  );
}
type resultModalProps = {
  apiKey: string;
  onClose: () => void;
  text: string;
};

export function ResultModal({ apiKey, onClose, text }: resultModalProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-[348px] h-[287px] p-6 rounded-xl bg-white shadow-md text-center space-y-4 relative flex flex-col justify-center items-center">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
      >
        <X />
      </button>
      <p className="text-lg font-medium">{text}</p>
      <p className="font-mono text-sm text-gray-700">{apiKey}</p>
      <Button
        className="w-[158px] h-[40px] bg-dash_blue mt-2"
        onClick={handleCopy}
      >
        {copied ? "Copied" : "Copy to clipboard"}
      </Button>
    </div>
  );
}
type successModalProps = {
  heading?: string;
  text?: string;
  onClose: () => void;
};

export function SuccessModal({ text, heading, onClose }: successModalProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="w-[348px] h-[287px] p-6 rounded-xl bg-white shadow-md text-center space-y-4 relative flex flex-col justify-center items-center z-[990]">
      <img src={Success.src} alt="success" className="mx-auto" />
      {heading && <p className="text-[24px] font-semibold">{heading}</p>}
      {text && <p className="text-[14px] font-normal">{text}</p>}
    </div>
  );
}

import { loading1, loading2, loading3, loading4 } from "@/public/images";

const images = [loading1, loading2, loading3, loading4];

const CustomLoader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center mb-3">
      <img src={images[index].src} className="w-12 " alt="Loading" />
    </div>
  );
};
