import { useState, useEffect } from "react";


type Zone = "WIB" | "WITA" | "WIT";
type IncludeSecond = boolean;

interface TimeOptions {
    includeSecond?: IncludeSecond;
    zone: Zone;
}

export function useFormattedTime({ includeSecond = false, zone }: TimeOptions) {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const zones: Record<Zone, { timeZone: string; offset: string }> = {
            WIB: { timeZone: "Asia/Jakarta", offset: "UTC+7/WIB" },
            WITA: { timeZone: "Asia/Makassar", offset: "UTC+8/WITA" },
            WIT: { timeZone: "Asia/Jayapura", offset: "UTC+9/WIT" },
        };

        const selectedZone = zones[zone];
        if (!selectedZone) {
            throw new Error(`Invalid zone. Valid options are: ${Object.keys(zones).join(", ")}`);
        }

        const { timeZone, offset } = selectedZone;

        const updateTime = () => {
            const options: Intl.DateTimeFormatOptions = {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            };

            if (includeSecond) {
                options.second = "2-digit";
            }

            const formattedTime = new Date().toLocaleString("en-US", {
                ...options,
                timeZone,
            });

            setTime(`${formattedTime}, ${offset}`);
        };

        updateTime(); // Set initial time
        const interval = setInterval(updateTime, includeSecond ? 1000 : 60000); // Update setiap detik atau menit

        return () => clearInterval(interval); // Cleanup saat komponen unmount
    }, [includeSecond, zone]);

    return time;
}
