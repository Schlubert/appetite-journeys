
import { useState, useEffect, useCallback } from 'react';
import { generateContent } from '../services/geminiService';

interface GeminiState {
  data: string | null;
  isLoading: boolean;
  error: string | null;
}

export const useGemini = (prompt: string | null) => {
  const [state, setState] = useState<GeminiState>({
    data: null,
    isLoading: true,
    error: null,
  });

  const fetchGeminiContent = useCallback(async () => {
    if (!prompt) {
      setState({ data: null, isLoading: false, error: 'Prompt is missing.' });
      return;
    }
    setState({ data: null, isLoading: true, error: null });
    try {
      const result = await generateContent(prompt);
      setState({ data: result, isLoading: false, error: null });
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
      setState({ data: null, isLoading: false, error: errorMessage });
    }
  }, [prompt]);

  useEffect(() => {
    fetchGeminiContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchGeminiContent]);

  return state;
};
