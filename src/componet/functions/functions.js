import { useState } from 'react';
import { useProjects } from '../contex-file/ProjectContex';

export const useProjectActions = () => {
  const {projects, setPeojects} = useProjects();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('Ezeanwechigozie@gmail.com');
    setMessage('Email copied to clipboard!');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/image/resume.jpg';
    link.download = 'resume.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setMessage('CV download started!');
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return { projects, success, message, handleEmailCopy, handleResumeDownload };
};
