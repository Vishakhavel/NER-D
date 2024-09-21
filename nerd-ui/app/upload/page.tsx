"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@mui/material";
// import dynamic from "next/dynamic";

const Upload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-500 h-500 w-500">
      <div className="bg-white p-10 rounded-lg shadow-xl text-center relative">
        <h1 className="text-4xl font-bold text-gray-700 mb-6">Upload files</h1>
        <div>
          <Button variant="outlined">
            <label htmlFor="file-upload" className="cursor-pointer">
              Upload files
            </label>{" "}
            <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </Button>
        </div>

        {file && (
          <div className="mt-6 text-gray-600">
            <strong>File Selected:</strong> {file.name}
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
