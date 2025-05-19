import { db } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

class AnalyticsService {
    constructor() {
        this.db = db;
    }

    // Método base para registrar eventos
    async trackEvent(userId, eventData) {
        if (!userId) {
            console.error('UserId é necessário para registrar eventos');
            return;
        }

        try {
            await addDoc(collection(this.db, 'analytics'), {
                userId,
                ...eventData,
                timestamp: serverTimestamp()
            });
        } catch (error) {
            console.error('Erro ao registrar evento:', error);
            throw error;
        }
    }

    // Métodos específicos para diferentes tipos de eventos
    async trackPageView(userId, pageName) {
        return this.trackEvent(userId, {
            type: 'page_view',
            page: pageName,
        });
    }

    async trackGameCompletion(userId, gameData) {
        return this.trackEvent(userId, {
            type: 'game_completion',
            ...gameData,
        });
    }

    async trackUserInteraction(userId, interactionData) {
        return this.trackEvent(userId, {
            type: 'user_interaction',
            ...interactionData,
        });
    }

    async trackError(userId, errorData) {
        return this.trackEvent(userId, {
            type: 'error',
            ...errorData,
        });
    }
}

const analyticsService = new AnalyticsService();
export default analyticsService;
