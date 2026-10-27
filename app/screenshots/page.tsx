import { getScreenshots, getLatestApkUrl } from "../../lib/github";
import { Navbar } from "../../components/Navbar";
import { pageMetadata } from "../../lib/seo";
import Image from "next/image";
import styles from "./screenshots.module.css";

export const metadata = pageMetadata({
  title: "Screenshots | PocketScore",
  description:
    "Preview PocketScore for Android. Browse screenshots of the Material 3 Expressive scorekeeping interface and game night features.",
  path: "/screenshots",
});

export default async function ScreenshotsPage() {
    const screenshots = await getScreenshots();
    const apkUrl = await getLatestApkUrl();

    return (
        <div className="page-transition">
            <main>
                <Navbar apkUrl={apkUrl} />
                <div className="m3-container">
                    <header className={styles.header}>
                        <h1 className={styles.title}>App Preview</h1>
                        <p className={styles.subtitle}>See PocketScore in action</p>
                    </header>

                    {screenshots.length === 0 ? (
                        <p className={styles.empty}>No screenshots found in GitHub repository.</p>
                    ) : (
                        <div className={styles.grid}>
                            {screenshots.map((s) => (
                                <div key={s.path} className={styles.screenshotWrapper}>
                                    <div className={styles.deviceFrame}>
                                        <div className={styles.mockScreen}>
                                            <Image
                                                src={s.download_url}
                                                alt={s.name}
                                                fill
                                                className={styles.image}
                                                unoptimized
                                            />
                                        </div>
                                    </div>
                                    <p className={styles.screenshotLabel}>
                                        {s.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
