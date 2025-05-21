import { use } from 'react';
import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

class AnalyticsService {
    constructor() {
        this.db = db;
    }

    // Método base para registrar eventos
    async trackEvent(userId, userDeviceInfo, eventData) {
        if (!userId) {
            console.error('UserId é necessário para registrar eventos');
            return;
        };

        if (!userDeviceInfo) {
            userDeviceInfo = "unknown";
        };

        try {
            await addDoc(collection(this.db, 'analytics'), {
                userId,
                userDeviceInfo,
                ...eventData,
                timestamp: serverTimestamp()
            });
        } catch (error) {
            console.error('Erro ao registrar evento:', error);
            throw error;
        }
    }

    // Métodos específicos para diferentes tipos de eventos
    async trackPageView(userId, userDeviceInfo, pageName) {
        return this.trackEvent(userId, userDeviceInfo, {
            type: 'page_view',
            page: pageName,
        });
    }

    async trackPageExit(userId, userDeviceInfo, pageName) {
        return this.trackEvent(userId, userDeviceInfo, {
            type: 'page_exit',
            page: pageName,
        });
    }

    async trackGameCompletion(userId, userDeviceInfo, gameData) {
        return this.trackEvent(userId, userDeviceInfo, {
            type: 'game_completion',
            ...gameData,
        });
    }

    async trackUserInteraction(userId, userDeviceInfo, interactionData) {
        return this.trackEvent(userId, userDeviceInfo, {
            type: 'user_interaction',
            ...interactionData,
        });
    }

    async trackError(userId, userDeviceInfo, errorData) {
        return this.trackEvent(userId, userDeviceInfo, {
            type: 'error',
            ...errorData,
        });
    }
}

const analyticsService = new AnalyticsService();
export default analyticsService;
