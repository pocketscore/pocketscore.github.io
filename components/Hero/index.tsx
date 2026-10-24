"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '../Button';
import Image from 'next/image';
import styles from './Hero.module.css';
import { GitHubContent } from '../../lib/github';

interface HeroProps {
    screenshots?: GitHubContent[];
    apkUrl?: string;
    version?: string;
}

export const Hero: React.FC<HeroProps> = ({ screenshots = [], apkUrl = '', version = '' }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (screenshots.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % screenshots.length);
            }, 4000); // Change every 4 seconds
            return () => clearInterval(interval);
        }
    }, [screenshots.length]);

    const handleDownload = () => {
        window.open(apkUrl || 'https://github.com/mwarrc/PocketScore/releases/latest', '_blank');
    };

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                {version && (
                    <div className={styles.versionTag}>
                        <span className={styles.versionDot}></span>
                        <span>v{version.replace('v', '')}</span>
                    </div>
                )}

                <h1 className={styles.heading}>
                    <span className={styles.headingAccent}>Track Every Point</span>
                    <br />
                    Game Night, Perfected
                </h1>

                <p className={styles.description}>
                    A beautifully crafted Android app for keeping score across any game. 
                    Built with Material 3 Expressive design for effortless game nights with 
                    friends and family.
                </p>

                <div className={styles.actions}>
                    <Button variant="primary" onClick={handleDownload} className={styles.downloadCall}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                            <path d="M10 2V14M10 14L5 9M10 14L15 9M3 18H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Download APK
                    </Button>
                    <Button variant="outlined" onClick={() => window.open('https://github.com/mwarrc/PocketScore')}>
                        View on GitHub
                    </Button>
                </div>

                <div className={styles.features}>
                    <div className={styles.featureItem}>
                        <div className={styles.featureDot}></div>
                        <span>Multiple game modes</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.featureDot}></div>
                        <span>Real-time tracking</span>
                    </div>
                    <div className={styles.featureItem}>
                        <div className={styles.featureDot}></div>
                        <span>Beautiful Material 3 UI</span>
                    </div>
                </div>
            </div>
            <div className={styles.visual}>
                <div className={styles.deviceFrame}>
                    <div className={styles.mockScreen}>
                        {screenshots.length > 0 ? (
                            <div className={styles.imageWrapper}>
                                {screenshots.map((s, i) => (
                                    <Image
                                        key={s.path}
                                        src={s.download_url}
                                        alt={s.name}
                                        fill
                                        className={`${styles.screenshot} ${i === currentImageIndex ? styles.active : ''}`}
                                        unoptimized
                                    />
                                ))}
                                <div className={styles.screenOverlay}></div>
                            </div>
                        ) : (
                            <div className={styles.defaultScreen}>
                                <div className={styles.statusIcons}></div>
                                <div className={styles.appTitle}>PocketScore</div>
                                <div className={styles.scoreGrid}>
                                    <div className={styles.scoreItem}></div>
                                    <div className={styles.scoreItem}></div>
                                    <div className={styles.scoreItem}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
