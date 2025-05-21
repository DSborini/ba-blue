// src/components/RouteTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAnalytics } from '../hooks/useAnalytics';
import { getUserId, getUserUniqueString } from '../utils/userIdentifier';

const RouteTracker = ({ children }) => {
    const location = useLocation();
    const { trackPageView, trackPageExit } = useAnalytics(getUserId(), getUserUniqueString());
    const analytics = useAnalytics(getUserId(), getUserUniqueString());

    useEffect(() => {
        const pageName = location.pathname;
        analytics.trackPageView(pageName);

        return () => {
            trackPageExit(pageName);
        };
    }, [location.pathname, trackPageView, trackPageExit]);

    return children;
};

export default RouteTracker;
