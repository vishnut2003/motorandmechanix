const brandIds = [9, 7, 6, 14, 5, 16, 8, 12, 1, 15, 13, 11, 4, 3, 20, 38, 18, 26, 34, 10, 37, 24, 30, 22, 36, 32, 27, 31, 35, 28, 2, 33, 17, 43, 42, 19, 41, 21, 25, 23, 29, 39, 40, 44, 45, 46];

async function syncAll() {
    try {
        console.log("Syncing brands first...");
        const bRes = await fetch(`http://localhost:3000/api/sync-geomechanic-vehicles?action=brands`);
        const bResult = await bRes.json();
        console.log(`Brands synced: ${bResult.count}`);

        console.log(`Starting sync for ${brandIds.length} brands...`);
        for (const id of brandIds) {
            try {
                process.stdout.write(`Syncing brand ID: ${id}... `);
                const response = await fetch(`http://localhost:3000/api/sync-geomechanic-vehicles?action=models&brandId=${id}`);
                const result = await response.json();
                if (result.success) {
                    console.log(`Success (${result.count} models)`);
                } else {
                    console.log(`Error: ${result.error}`);
                }
            } catch (error) {
                console.log(`Fetch failed: ${error.message}`);
            }
            // Delay to avoid overwhelming the server
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    } catch (error) {
        console.error("General error:", error.message);
    }
    console.log("Sync complete.");
}

syncAll();
