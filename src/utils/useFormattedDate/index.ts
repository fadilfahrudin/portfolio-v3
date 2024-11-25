import { useState, useEffect } from "react";

export function useFormattedDate(format = "dddd, DD MMM YYYY") {
    const [formattedDate, setFormattedDate] = useState("");

    useEffect(() => {
        const updateDate = () => {
            const date = new Date();

            // Konversi hari dan bulan ke dalam format yang diinginkan
            const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" }); // Hari (contoh: Saturday)
            const day = String(date.getDate()).padStart(2, "0"); // Tanggal (contoh: 23)
            const month = date.toLocaleString("en-US", { month: "short" }).toUpperCase(); // Bulan singkat (contoh: NOV)
            const year = date.getFullYear(); // Tahun (contoh: 2024)

            // Format tanggal berdasarkan format yang diberikan
            const formatted = format
                .replace("dddd", dayOfWeek)
                .replace("DD", day)
                .replace("MMM", month)
                .replace("YYYY", String(year));

            setFormattedDate(formatted);
        };

        updateDate(); // Set initial date
    }, [format]);
    return formattedDate;
}
