(function() {
    function allowMixedContent() {
      try {
        // Pastikan document.head sudah tersedia
        if (!document.head) {
          console.warn("[Mixed Content Unblocker] document.head belum tersedia, mencoba ulang...");
          setTimeout(allowMixedContent, 100);
          return;
        }
  
        // Tambahkan meta tag untuk mengizinkan mixed content
        let meta = document.createElement("meta");
        meta.httpEquiv = "Content-Security-Policy";
        meta.content = "upgrade-insecure-requests";
        document.head.appendChild(meta);
  
        // Mengizinkan iframe menampilkan mixed content
        document.querySelectorAll("iframe").forEach((iframe) => {
          iframe.allow = "encrypted-media; autoplay; fullscreen; display-capture";
        });
  
        console.log("[Mixed Content Unblocker] Konten embed diizinkan.");
      } catch (err) {
        console.error("[Mixed Content Unblocker] Error:", err);
      }
    }
  
    // Jalankan script setelah DOM tersedia
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", allowMixedContent);
    } else {
      allowMixedContent();
    }
  })();
  