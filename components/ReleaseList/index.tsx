"use client";

import React, { useState } from 'react';
import { GitHubRelease } from '../../lib/github';
import { Card } from '../Card';
import { Button } from '../Button';
import styles from './ReleaseList.module.css';

interface ReleaseListProps {
    releases: GitHubRelease[];
}

function parseMarkdown(text: string): string {
    if (!text) return '';
    
    let result = text;
    
    // Remove markdown headings
    result = result.replace(/^#{1,6}\s+(.*)$/gm, '$1');
    
    // Remove bold/italic
    result = result.replace(/\*\*(.*?)\*\*/g, '$1');
    result = result.replace(/\*(.*?)\*/g, '$1');
    result = result.replace(/__(.*?)__/g, '$1');
    result = result.replace(/_(.*?)_/g, '$1');
    
    // Remove code blocks and inline code
    result = result.replace(/```[\s\S]*?```/g, '');
    result = result.replace(/`(.*?)`/g, '$1');
    
    // Remove links but keep text
    result = result.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
    
    // Remove images
    result = result.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');
    
    // Clean up bullet points and list markers
    result = result.replace(/^\s*[-*+]\s+/gm, '• ');
    result = result.replace(/^\s*\d+\.\s+/gm, '• ');
    
    // Clean up extra whitespace
    result = result.replace(/\n{3,}/g, '\n\n');
    result = result.trim();
    
    return result;
}

export const ReleaseList: React.FC<ReleaseListProps> = ({ releases }) => {
    const [expandedReleases, setExpandedReleases] = useState<Set<string>>(new Set());

    if (!releases || releases.length === 0) {
        return <p className={styles.empty}>No releases found.</p>;
    }

    const toggleExpanded = (tagName: string) => {
        setExpandedReleases(prev => {
            const newSet = new Set(prev);
            if (newSet.has(tagName)) {
                newSet.delete(tagName);
            } else {
                newSet.add(tagName);
            }
            return newSet;
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.headerSection}>
                <h2 className="m3-headline-medium">Releases</h2>
                <p className={styles.subtitle}>Download the latest version of PocketScore</p>
            </div>
            <div className={styles.list}>
                {releases.map((release, index) => {
                    const isExpanded = expandedReleases.has(release.tag_name);
                    const parsedBody = release.body ? parseMarkdown(release.body) : '';
                    const shouldTruncate = parsedBody.length > 400 && !isExpanded;

                    return (
                        <Card key={release.tag_name} variant="elevated" className={styles.releaseCard}>
                            <div className={styles.header}>
                                <div className={styles.tagGroup}>
                                    <span className={styles.tag}>{release.tag_name}</span>
                                    {index === 0 && <span className={styles.latestBadge}>Latest</span>}
                                </div>
                                <span className={styles.date}>
                                    {new Date(release.published_at).toLocaleDateString(undefined, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                            </div>
                            <h3 className={styles.title}>{release.name || release.tag_name}</h3>
                            {parsedBody && (
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.description}>
                                        {shouldTruncate ? parsedBody.slice(0, 400) + '...' : parsedBody}
                                    </p>
                                    {parsedBody.length > 400 && (
                                        <button
                                            className={styles.showMoreButton}
                                            onClick={() => toggleExpanded(release.tag_name)}
                                        >
                                            {isExpanded ? 'Show less' : 'Show more'}
                                        </button>
                                    )}
                                </div>
                            )}
                            <div className={styles.actions}>
                                {release.assets && release.assets.length > 0 && (
                                    <Button
                                        variant="primary"
                                        onClick={() => window.open(release.assets[0].browser_download_url)}
                                    >
                                        Download APK
                                    </Button>
                                )}
                                <Button
                                    variant="outlined"
                                    onClick={() => window.open(release.html_url)}
                                >
                                    View on GitHub
                                </Button>
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};
