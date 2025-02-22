import Status from '@components/ui/status/Status';
import CustomCarousel from '@components/ui/carousel/Carousel';
import styles from './styles.module.scss'
import { StationStatus } from '@common/types/stations';
import { STATION_STATUS_COLORS } from '@common/consts/station';

type Props = {
	imageSources: string[];
    stationStatus: StationStatus;
    rating?: number;
}

/**
 * Блок с отображением карусели фотографий, статусом и рейтингом
 */
export default function StationPhotos(props: Props): React.JSX.Element {

    const statusColor = STATION_STATUS_COLORS[props.stationStatus];

    return (
        <div>
            <div className={styles.infoBar}>
                <Status  color={statusColor}  textSize='large' text={props.stationStatus} className={styles.customStatus}/>
                {props.rating && (
                    <div className={styles.customRating}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.15316 3.40838C8.41981 1.13613 9.05314 0 10 0C10.9469 0 11.5802 1.13612 12.8468 3.40837L13.1745 3.99623C13.5345 4.64193 13.7144 4.96479 13.9951 5.17781C14.2757 5.39083 14.6251 5.4699 15.3241 5.62805L15.9605 5.77203C18.4201 6.32856 19.65 6.60682 19.9426 7.54773C20.2352 8.48864 19.3968 9.46907 17.7199 11.4299L17.2861 11.9372C16.8096 12.4944 16.5713 12.773 16.4641 13.1177C16.357 13.4624 16.393 13.8341 16.465 14.5776L16.5306 15.2544C16.7841 17.8706 16.9109 19.1787 16.1449 19.7602C15.3788 20.3417 14.2273 19.8115 11.9243 18.7512L11.3285 18.4768C10.6741 18.1755 10.3469 18.0248 10 18.0248C9.65315 18.0248 9.32593 18.1755 8.67149 18.4768L8.07567 18.7512C5.77268 19.8115 4.62118 20.3417 3.85515 19.7602C3.08912 19.1787 3.21588 17.8706 3.4694 15.2544L3.53498 14.5776C3.60703 13.8341 3.64305 13.4624 3.53586 13.1177C3.42868 12.773 3.19043 12.4944 2.71392 11.9372L2.2801 11.4299C0.603249 9.46907 -0.235175 8.48864 0.057421 7.54773C0.350017 6.60682 1.57986 6.32856 4.03954 5.77203L4.67589 5.62805C5.37485 5.4699 5.72433 5.39083 6.00494 5.17781C6.28555 4.96479 6.46553 4.64194 6.82547 3.99623L7.15316 3.40838Z" fill="#F89520"/>
                        </svg>

                        <p className={`${styles.textBox} ${styles.text}`}>{props.rating}</p>
                    </div>
                )}
            </div>
            <CustomCarousel imageSources={props.imageSources}/>
        </div>
    );
}