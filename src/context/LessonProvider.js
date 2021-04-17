import React, { useState, useEffect } from 'react';
import defaultState from './DefaultState';
import LessonContext from './LessonContext';

export default function LessonContextProvider({ children }) {
  return <LessonContext.Provider value={{}}>{children}</LessonContext.Provider>;
}
