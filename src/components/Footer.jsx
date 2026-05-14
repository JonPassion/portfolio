import React from 'react';
import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t dark:border-gray-700 bg-white dark:bg-gray-900">
    <p>&copy; {new Date().getFullYear()} Developed By Passion Joni; All rights reserved.</p>
    <p className="mt-1">E-mail: jonipassion@gmail.com </p>
  <center>
<div className="flex items-center gap-2 mt-1">
        <Phone className="w-5 h-5 text-gray-600" />
        <p>Contact: +263784001850</p>
      </div>
  </center>
    
    </footer>
  );

export default Footer;



