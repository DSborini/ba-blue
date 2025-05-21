import { useCallback } from 'react';
import analyticsService from '../services/analyticsService';

export const useAnalytics = (userId, userDeviceInfo) => {
    const trackPageView = useCallback((pageName) => {
        return analyticsService.trackPageView(userId, userDeviceInfo, pageName);
    }, [userId, userDeviceInfo]);

    const trackPageExit = useCallback((pageName) => {
        return analyticsService.trackPageExit(userId, userDeviceInfo, pageName);
    }, [userId, userDeviceInfo]);

    const trackGameCompletion = useCallback((gameData) => {
        return analyticsService.trackGameCompletion(userId, userDeviceInfo, gameData);
    }, [userId, userDeviceInfo]);

    const trackUserInteraction = useCallback((interactionData) => {
        return analyticsService.trackUserInteraction(userId, userDeviceInfo, interactionData);
    }, [userId, userDeviceInfo]);

    const trackError = useCallback((errorData) => {
        return analyticsService.trackError(userId, userDeviceInfo, errorData);
    }, [userId, userDeviceInfo]);

    return {
        trackPageView,
        trackPageExit,
        trackGameCompletion,
        trackUserInteraction,
        trackError,
    };
};
