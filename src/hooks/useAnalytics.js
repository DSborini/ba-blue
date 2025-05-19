import { useCallback } from 'react';
import analyticsService from '../services/analyticsService';

export const useAnalytics = (userId) => {
    const trackPageView = useCallback((pageName) => {
        return analyticsService.trackPageView(userId, pageName);
    }, [userId]);

    const trackGameCompletion = useCallback((gameData) => {
        return analyticsService.trackGameCompletion(userId, gameData);
    }, [userId]);

    const trackUserInteraction = useCallback((interactionData) => {
        return analyticsService.trackUserInteraction(userId, interactionData);
    }, [userId]);

    const trackError = useCallback((errorData) => {
        return analyticsService.trackError(userId, errorData);
    }, [userId]);

    return {
        trackPageView,
        trackGameCompletion,
        trackUserInteraction,
        trackError,
    };
};
