Luiss-MacBook-Pro:testssl luis.romero$ ./testssl.sh https://scenter.int.fxall.com

#####################################################################
  testssl.sh version 3.2.2 from https://testssl.sh/

  This program is free software. Distribution and modification under
  GPLv2 permitted. USAGE w/o ANY WARRANTY. USE IT AT YOUR OWN RISK!

  Please file bugs @ https://testssl.sh/bugs/
#####################################################################

  Using OpenSSL 1.0.2-bad (Sep 3 2022)  [~183 ciphers]
  on Luiss-MacBook-Pro:./bin/openssl.Darwin.x86_64

Testing all IP addresses (port 443): 159.220.97.8 159.220.97.9
----------------------------------------------------------------------------------------------------------------------------------------
 Start 2026-02-11 14:26:51        -->> 159.220.97.8:443 (scenter.int.fxall.com) <<--

 Further IP addresses:   159.220.97.9 
 rDNS (159.220.97.8):    --
 Service detected:       HTTP

 Testing protocols via sockets except NPN+ALPN 

 SSLv2      not offered (OK)
 SSLv3      not offered (OK)
 TLS 1      not offered
 TLS 1.1    not offered
 TLS 1.2    offered (OK)
 TLS 1.3    offered (OK): final
 NPN/SPDY   h2, http/1.1 (advertised)
 ALPN/HTTP2 h2, http/1.1 (offered)

 Testing cipher categories 

 NULL ciphers (no encryption)                      not offered (OK)
 Anonymous NULL Ciphers (no authentication)        not offered (OK)
 Export ciphers (w/o ADH+NULL)                     not offered (OK)
 LOW: 64 Bit + DES, RC[2,4], MD5 (w/o export)      not offered (OK)
 Triple DES Ciphers / IDEA                         not offered
 Obsoleted CBC ciphers (AES, ARIA etc.)            offered
 Strong encryption (AEAD ciphers) with no FS       offered (OK)
 Forward Secrecy strong encryption (AEAD ciphers)  offered (OK)


 Testing server's cipher preferences 

Hexcode  Cipher Suite Name (OpenSSL)       KeyExch.   Encryption  Bits     Cipher Suite Name (IANA/RFC)
-----------------------------------------------------------------------------------------------------------------------------
SSLv2
 - 
SSLv3
 - 
TLSv1
 - 
TLSv1.1
 - 
TLSv1.2 (server order -- server prioritizes ChaCha ciphers when preferred by clients)
 xc02b   ECDHE-ECDSA-AES128-GCM-SHA256     ECDH 253   AESGCM      128      TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256            
 xcca9   ECDHE-ECDSA-CHACHA20-POLY1305     ECDH 253   ChaCha20    256      TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256      
 xc009   ECDHE-ECDSA-AES128-SHA            ECDH 253   AES         128      TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA               
 xc02c   ECDHE-ECDSA-AES256-GCM-SHA384     ECDH 253   AESGCM      256      TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384            
 xc00a   ECDHE-ECDSA-AES256-SHA            ECDH 253   AES         256      TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA               
 xc023   ECDHE-ECDSA-AES128-SHA256         ECDH 253   AES         128      TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256            
 xc024   ECDHE-ECDSA-AES256-SHA384         ECDH 253   AES         256      TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384            
 xc02f   ECDHE-RSA-AES128-GCM-SHA256       ECDH 253   AESGCM      128      TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256              
 xcca8   ECDHE-RSA-CHACHA20-POLY1305       ECDH 253   ChaCha20    256      TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256        
 xc013   ECDHE-RSA-AES128-SHA              ECDH 253   AES         128      TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA                 
 x9c     AES128-GCM-SHA256                 RSA        AESGCM      128      TLS_RSA_WITH_AES_128_GCM_SHA256                    
 x2f     AES128-SHA                        RSA        AES         128      TLS_RSA_WITH_AES_128_CBC_SHA                       
 xc030   ECDHE-RSA-AES256-GCM-SHA384       ECDH 253   AESGCM      256      TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384              
 xc014   ECDHE-RSA-AES256-SHA              ECDH 253   AES         256      TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA                 
 x9d     AES256-GCM-SHA384                 RSA        AESGCM      256      TLS_RSA_WITH_AES_256_GCM_SHA384                    
 x35     AES256-SHA                        RSA        AES         256      TLS_RSA_WITH_AES_256_CBC_SHA                       
 xc027   ECDHE-RSA-AES128-SHA256           ECDH 253   AES         128      TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256              
 x3c     AES128-SHA256                     RSA        AES         128      TLS_RSA_WITH_AES_128_CBC_SHA256                    
 xc028   ECDHE-RSA-AES256-SHA384           ECDH 253   AES         256      TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384              
 x3d     AES256-SHA256                     RSA        AES         256      TLS_RSA_WITH_AES_256_CBC_SHA256                    
TLSv1.3 (no server order, thus listed by strength)
 x1302   TLS_AES_256_GCM_SHA384            ECDH/MLKEM AESGCM      256      TLS_AES_256_GCM_SHA384                             
 x1303   TLS_CHACHA20_POLY1305_SHA256      ECDH/MLKEM ChaCha20    256      TLS_CHACHA20_POLY1305_SHA256                       
 x1301   TLS_AES_128_GCM_SHA256            ECDH/MLKEM AESGCM      128      TLS_AES_128_GCM_SHA256                             

 Has server cipher order?     yes (OK) -- only for < TLS 1.3


 Testing robust forward secrecy (FS) -- omitting Null Authentication/Encryption, 3DES, RC4 

 FS is offered (OK)           TLS_AES_256_GCM_SHA384 TLS_CHACHA20_POLY1305_SHA256 ECDHE-RSA-AES256-GCM-SHA384 ECDHE-ECDSA-AES256-GCM-SHA384 ECDHE-RSA-AES256-SHA384 ECDHE-ECDSA-AES256-SHA384
                              ECDHE-RSA-AES256-SHA ECDHE-ECDSA-AES256-SHA ECDHE-ECDSA-CHACHA20-POLY1305 ECDHE-RSA-CHACHA20-POLY1305 TLS_AES_128_GCM_SHA256 ECDHE-RSA-AES128-GCM-SHA256
                              ECDHE-ECDSA-AES128-GCM-SHA256 ECDHE-RSA-AES128-SHA256 ECDHE-ECDSA-AES128-SHA256 ECDHE-RSA-AES128-SHA ECDHE-ECDSA-AES128-SHA 
 KEMs offered                 X25519MLKEM768 X25519Kyber768Draft00 
 Elliptic curves offered:     prime256v1 secp384r1 secp521r1 X25519 
 TLS 1.2 sig_algs offered:    RSA-PSS-RSAE+SHA256 RSA+SHA256 RSA-PSS-RSAE+SHA384 ECDSA+SHA256 ECDSA+SHA384 ECDSA+SHA512 
 TLS 1.3 sig_algs offered:    ECDSA+SHA256 

 Testing server defaults (Server Hello) 

 TLS extensions (standard)    "server name/#0" "status request/#5" "EC point formats/#11" "application layer protocol negotiation/#16" "extended master secret/#23" "compress_certificate/#27"
                              "session ticket/#35" "supported versions/#43" "key share/#51" "next protocol/#13172" "renegotiation info/#65281"
 Session Ticket RFC 5077 hint 64800 seconds, session tickets keys seems to be rotated < daily
 SSL Session ID support       yes
 Session Resumption           Tickets: yes, ID: no
 TLS clock skew               Random values, no fingerprinting possible 
 Certificate Compression      0002/Brotli
 Client Authentication        none

  Server Certificate #1
   Signature Algorithm          SHA256 with RSA
   Server key size              RSA 2048 bits (exponent is 65537)
   Server key usage             Digital Signature, Key Encipherment
   Server extended key usage    TLS Web Server Authentication
   Serial                       B4D1D481A41709ED13535B66F3911419 (OK: length 16)
   Fingerprints                 SHA1 A8DEDA98694E73048D980F5410BEA8F14F0720D4
                                SHA256 1AEFB847C597B8A1C3EF750A21B0C5D830312476653DDCD98C15174B5195AE6E
   Common Name (CN)             scenter.int.fxall.com  (request w/o SNI didn't succeed)
   subjectAltName (SAN)         scenter.int.fxall.com 
   Trust (hostname)             Ok via SAN and CN (SNI mandatory)
   Chain of trust               Ok   
   EV cert (experimental)       no 
   Certificate Validity (UTC)   87 >= 60 days (2026-02-09 11:06 --> 2026-05-10 12:05)
   ETS/"eTLS", visibility info  not present
   Certificate Revocation List  http://c.pki.goog/wr1/jWg-VIyZ1sY.crl
   OCSP URI                     http://o.pki.goog/s/wr1/tNE
   OCSP stapling                offered, not revoked
   OCSP must staple extension   --
   DNS CAA RR (experimental)    not offered
   Certificate Transparency     yes (certificate extension)
   Certificates provided        3
   Issuer                       WR1 (Google Trust Services from US)
   Intermediate cert validity   #1: ok > 40 days (2029-02-20 14:00). WR1 <-- GTS Root R1
                                #2: ok > 40 days (2028-01-28 00:00). GTS Root R1 <-- GlobalSign Root CA
   Intermediate Bad OCSP (exp.) Ok

  Server Certificate #2
   Signature Algorithm          ECDSA with SHA256
   Server key size              EC 256 bits (curve P-256)
   Server key usage             Digital Signature
   Server extended key usage    TLS Web Server Authentication
   Serial                       B6C41D0564AC5B5A0E697FA5C1CA0E03 (OK: length 16)
   Fingerprints                 SHA1 54AE2DA9DCA39E729AC15D60A9B5CC4D7FCC5D60
                                SHA256 693D1B81BB5DC662557AAF8C66AF52D7373BC765AF3427AFDC145FAE6D8FA7B0
   Common Name (CN)             scenter.int.fxall.com  (request w/o SNI didn't succeed, usual for EC certificates)
   subjectAltName (SAN)         scenter.int.fxall.com 
   Trust (hostname)             Ok via SAN and CN (SNI mandatory)
   Chain of trust               Ok   
   EV cert (experimental)       no 
   Certificate Validity (UTC)   87 >= 60 days (2026-02-09 11:06 --> 2026-05-10 12:06)
   ETS/"eTLS", visibility info  not present
   Certificate Revocation List  http://c.pki.goog/we1/jOS_4m-LORs.crl
   OCSP URI                     http://o.pki.goog/s/we1/tsQ
   OCSP stapling                offered, not revoked
   OCSP must staple extension   --
   DNS CAA RR (experimental)    not offered
   Certificate Transparency     yes (certificate extension)
   Certificates provided        3
   Issuer                       WE1 (Google Trust Services from US)
   Intermediate cert validity   #1: ok > 40 days (2029-02-20 14:00). WE1 <-- GTS Root R4
                                #2: ok > 40 days (2028-01-28 00:00). GTS Root R4 <-- GlobalSign Root CA
   Intermediate Bad OCSP (exp.) Ok


 Testing HTTP header response @ "/" 

 HTTP Status Code             403 Forbidden
 HTTP clock skew              0 sec from localtime
 IPv4 address in header       set-cookie: __cf_bm=OEgsl.iMdEYh3j4QCKg95n1HMMGwxpTkqns4xZ4bZ4Q-1770841814.2523704-1.0.1.1-zRAJl_JRFPInOp.nO6cEf.lw3oMQ4qse0WMwqi1lTyw7fd0r3pdjlWgY._98qyIRaa7td.6dZdxIsEdt3YBBqQMR2a7zVbeW1e41MO95YJoYYTHXvS7pHVT86bc5rnMl; HttpOnly; Secure; Path=/; Domain=fxall.com; Expires=Wed, 11 Feb 2026 21:00:14 GMT
                              (check if it's your IP address or e.g. a cluster IP)
 Strict Transport Security    not offered
 Public Key Pinning           --
 Server banner                cloudflare
 Application banner           --
 Cookie(s)                    1 issued: 1/1 secure, 1/1 HttpOnly -- HTTP status 403 signals you maybe missed the web application
 Security headers             --
 Reverse Proxy banner         --


 Testing vulnerabilities 

 Heartbleed (CVE-2014-0160)                not vulnerable (OK), no heartbeat extension
 CCS (CVE-2014-0224)                       not vulnerable (OK)
 Ticketbleed (CVE-2016-9244), experiment.  not vulnerable (OK)
 ROBOT                                     not vulnerable (OK)
 Secure Renegotiation (RFC 5746)           supported (OK)
 Secure Client-Initiated Renegotiation     not vulnerable (OK)
 CRIME, TLS (CVE-2012-4929)                not vulnerable (OK)
 BREACH (CVE-2013-3587)                    potentially NOT ok, "gzip" HTTP compression detected. - only supplied "/" tested
                                           Can be ignored for static pages or if no secrets in the page
 POODLE, SSL (CVE-2014-3566)               not vulnerable (OK), no SSLv3 support
 TLS_FALLBACK_SCSV (RFC 7507)              No fallback possible (OK), no protocol below TLS 1.2 offered
 SWEET32 (CVE-2016-2183, CVE-2016-6329)    not vulnerable (OK)
 FREAK (CVE-2015-0204)                     not vulnerable (OK)
 DROWN (CVE-2016-0800, CVE-2016-0703)      not vulnerable on this host and port (OK)
                                           make sure you don't use this certificate elsewhere with SSLv2 enabled services, see
                                           https://search.censys.io/search?resource=hosts&virtual_hosts=INCLUDE&q=1AEFB847C597B8A1C3EF750A21B0C5D830312476653DDCD98C15174B5195AE6E
 LOGJAM (CVE-2015-4000), experimental      not vulnerable (OK): no DH EXPORT ciphers, no DH key detected with <= TLS 1.2
 BEAST (CVE-2011-3389)                     not vulnerable (OK), no SSL3 or TLS1
 LUCKY13 (CVE-2013-0169), experimental     potentially VULNERABLE, uses obsolete cipher block chaining ciphers with TLS, see server prefs.
 Winshock (CVE-2014-6321), experimental    not vulnerable (OK)
 RC4 (CVE-2013-2566, CVE-2015-2808)        no RC4 ciphers detected (OK)


 Running client simulations (HTTP) via sockets 

 Browser                      Protocol  Cipher Suite Name (OpenSSL)       Forward Secrecy
------------------------------------------------------------------------------------------------
 Android 7.0 (native)         TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 Android 8.1 (native)         TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     253 bit ECDH (X25519)
 Android 9.0 (native)         TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Android 10.0 (native)        TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Android 11/12 (native)       TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Android 13/14 (native)       TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Android 15 (native)          TLSv1.3   TLS_AES_128_GCM_SHA256            X25519MLKEM768
 Chrome 101 (Win 10)          TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Chromium 137 (Win 11)        TLSv1.3   TLS_AES_128_GCM_SHA256            X25519MLKEM768
 Firefox 100 (Win 10)         TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Firefox 137 (Win 11)         TLSv1.3   TLS_AES_128_GCM_SHA256            X25519MLKEM768
 IE 8 Win 7                   No connection
 IE 11 Win 7                  TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 IE 11 Win 8.1                TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 IE 11 Win Phone 8.1          TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 IE 11 Win 10                 TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 Edge 15 Win 10               TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     253 bit ECDH (X25519)
 Edge 101 Win 10 21H2         TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Edge 133 Win 11 23H2         TLSv1.3   TLS_AES_128_GCM_SHA256            X25519MLKEM768
 Safari 18.4 (iOS 18.4)       TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Safari 15.4 (macOS 12.3.1)   TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Safari 18.4 (macOS 15.4)     TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Java 7u25                    No connection
 Java 8u442 (OpenJDK)         TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 Java 11.0.2 (OpenJDK)        TLSv1.3   TLS_AES_128_GCM_SHA256            256 bit ECDH (P-256)
 Java 17.0.3 (OpenJDK)        TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 Java 21.0.6 (OpenJDK)        TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 go 1.17.8                    TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 LibreSSL 3.3.6 (macOS)       TLSv1.3   TLS_CHACHA20_POLY1305_SHA256      253 bit ECDH (X25519)
 OpenSSL 1.0.2e               TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 OpenSSL 1.1.1d (Debian)      TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 OpenSSL 3.0.15 (Debian)      TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 OpenSSL 3.5.0 (git)          TLSv1.3   TLS_AES_256_GCM_SHA384            X25519MLKEM768
 Apple Mail (16.0)            TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 Thunderbird (91.9)           TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)


 Rating (experimental) 

 Rating specs (not complete)  SSL Labs's 'SSL Server Rating Guide' (version 2009r from 2025-05-16)
 Specification documentation  https://github.com/ssllabs/research/wiki/SSL-Server-Rating-Guide
 Protocol Support (weighted)  100 (30)
 Key Exchange     (weighted)  90 (27)
 Cipher Strength  (weighted)  90 (36)
 Final Score                  93
 Overall Grade                A+

 Done 2026-02-11 14:32:01 [0325s] -->> 159.220.97.8:443 (scenter.int.fxall.com) <<--

----------------------------------------------------------------------------------------------------------------------------------------
 Start 2026-02-11 14:32:01        -->> 159.220.97.9:443 (scenter.int.fxall.com) <<--

 Further IP addresses:   159.220.97.8 
 rDNS (159.220.97.9):    --
 Service detected:       HTTP

 Testing protocols via sockets except NPN+ALPN 

 SSLv2      not offered (OK)
 SSLv3      not offered (OK)
 TLS 1      not offered
 TLS 1.1    not offered
 TLS 1.2    offered (OK)
 TLS 1.3    offered (OK): final
 NPN/SPDY   h2, http/1.1 (advertised)
 ALPN/HTTP2 h2, http/1.1 (offered)

 Testing cipher categories 

 NULL ciphers (no encryption)                      not offered (OK)
 Anonymous NULL Ciphers (no authentication)        not offered (OK)
 Export ciphers (w/o ADH+NULL)                     not offered (OK)
 LOW: 64 Bit + DES, RC[2,4], MD5 (w/o export)      not offered (OK)
 Triple DES Ciphers / IDEA                         not offered
 Obsoleted CBC ciphers (AES, ARIA etc.)            offered
 Strong encryption (AEAD ciphers) with no FS       offered (OK)
 Forward Secrecy strong encryption (AEAD ciphers)  offered (OK)


 Testing server's cipher preferences 

Hexcode  Cipher Suite Name (OpenSSL)       KeyExch.   Encryption  Bits     Cipher Suite Name (IANA/RFC)
-----------------------------------------------------------------------------------------------------------------------------
SSLv2
 - 
SSLv3
 - 
TLSv1
 - 
TLSv1.1
 - 
TLSv1.2 (server order -- server prioritizes ChaCha ciphers when preferred by clients)
 xc02b   ECDHE-ECDSA-AES128-GCM-SHA256     ECDH 253   AESGCM      128      TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256            
 xcca9   ECDHE-ECDSA-CHACHA20-POLY1305     ECDH 253   ChaCha20    256      TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256      
 xc009   ECDHE-ECDSA-AES128-SHA            ECDH 253   AES         128      TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA               
 xc02c   ECDHE-ECDSA-AES256-GCM-SHA384     ECDH 253   AESGCM      256      TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384            
 xc00a   ECDHE-ECDSA-AES256-SHA            ECDH 253   AES         256      TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA               
 xc023   ECDHE-ECDSA-AES128-SHA256         ECDH 253   AES         128      TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256            
 xc024   ECDHE-ECDSA-AES256-SHA384         ECDH 253   AES         256      TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384            
 xc02f   ECDHE-RSA-AES128-GCM-SHA256       ECDH 253   AESGCM      128      TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256              
 xcca8   ECDHE-RSA-CHACHA20-POLY1305       ECDH 253   ChaCha20    256      TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256        
 xc013   ECDHE-RSA-AES128-SHA              ECDH 253   AES         128      TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA                 
 x9c     AES128-GCM-SHA256                 RSA        AESGCM      128      TLS_RSA_WITH_AES_128_GCM_SHA256                    
 x2f     AES128-SHA                        RSA        AES         128      TLS_RSA_WITH_AES_128_CBC_SHA                       
 xc030   ECDHE-RSA-AES256-GCM-SHA384       ECDH 253   AESGCM      256      TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384              
 xc014   ECDHE-RSA-AES256-SHA              ECDH 253   AES         256      TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA                 
 x9d     AES256-GCM-SHA384                 RSA        AESGCM      256      TLS_RSA_WITH_AES_256_GCM_SHA384                    
 x35     AES256-SHA                        RSA        AES         256      TLS_RSA_WITH_AES_256_CBC_SHA                       
 xc027   ECDHE-RSA-AES128-SHA256           ECDH 253   AES         128      TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256              
 x3c     AES128-SHA256                     RSA        AES         128      TLS_RSA_WITH_AES_128_CBC_SHA256                    
 xc028   ECDHE-RSA-AES256-SHA384           ECDH 253   AES         256      TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384              
 x3d     AES256-SHA256                     RSA        AES         256      TLS_RSA_WITH_AES_256_CBC_SHA256                    
TLSv1.3 (no server order, thus listed by strength)
 x1302   TLS_AES_256_GCM_SHA384            ECDH/MLKEM AESGCM      256      TLS_AES_256_GCM_SHA384                             
 x1303   TLS_CHACHA20_POLY1305_SHA256      ECDH/MLKEM ChaCha20    256      TLS_CHACHA20_POLY1305_SHA256                       
 x1301   TLS_AES_128_GCM_SHA256            ECDH/MLKEM AESGCM      128      TLS_AES_128_GCM_SHA256                             

 Has server cipher order?     yes (OK) -- only for < TLS 1.3


 Testing robust forward secrecy (FS) -- omitting Null Authentication/Encryption, 3DES, RC4 

 FS is offered (OK)           TLS_AES_256_GCM_SHA384 TLS_CHACHA20_POLY1305_SHA256 ECDHE-RSA-AES256-GCM-SHA384 ECDHE-ECDSA-AES256-GCM-SHA384 ECDHE-RSA-AES256-SHA384 ECDHE-ECDSA-AES256-SHA384
                              ECDHE-RSA-AES256-SHA ECDHE-ECDSA-AES256-SHA ECDHE-ECDSA-CHACHA20-POLY1305 ECDHE-RSA-CHACHA20-POLY1305 TLS_AES_128_GCM_SHA256 ECDHE-RSA-AES128-GCM-SHA256
                              ECDHE-ECDSA-AES128-GCM-SHA256 ECDHE-RSA-AES128-SHA256 ECDHE-ECDSA-AES128-SHA256 ECDHE-RSA-AES128-SHA ECDHE-ECDSA-AES128-SHA 
 KEMs offered                 X25519MLKEM768 X25519Kyber768Draft00 
 Elliptic curves offered:     prime256v1 secp384r1 secp521r1 X25519 
 TLS 1.2 sig_algs offered:    RSA-PSS-RSAE+SHA256 RSA+SHA256 RSA-PSS-RSAE+SHA384 ECDSA+SHA256 ECDSA+SHA384 ECDSA+SHA512 
 TLS 1.3 sig_algs offered:    ECDSA+SHA256 

 Testing server defaults (Server Hello) 

 TLS extensions (standard)    "server name/#0" "status request/#5" "EC point formats/#11" "application layer protocol negotiation/#16" "extended master secret/#23" "compress_certificate/#27"
                              "session ticket/#35" "supported versions/#43" "key share/#51" "next protocol/#13172" "renegotiation info/#65281"
 Session Ticket RFC 5077 hint 64800 seconds, session tickets keys seems to be rotated < daily
 SSL Session ID support       yes
 Session Resumption           Tickets: yes, ID: no
 TLS clock skew               Random values, no fingerprinting possible 
 Certificate Compression      0002/Brotli
 Client Authentication        none

  Server Certificate #1
   Signature Algorithm          SHA256 with RSA
   Server key size              RSA 2048 bits (exponent is 65537)
   Server key usage             Digital Signature, Key Encipherment
   Server extended key usage    TLS Web Server Authentication
   Serial                       B4D1D481A41709ED13535B66F3911419 (OK: length 16)
   Fingerprints                 SHA1 A8DEDA98694E73048D980F5410BEA8F14F0720D4
                                SHA256 1AEFB847C597B8A1C3EF750A21B0C5D830312476653DDCD98C15174B5195AE6E
   Common Name (CN)             scenter.int.fxall.com  (request w/o SNI didn't succeed)
   subjectAltName (SAN)         scenter.int.fxall.com 
   Trust (hostname)             Ok via SAN and CN (SNI mandatory)
   Chain of trust               Ok   
   EV cert (experimental)       no 
   Certificate Validity (UTC)   87 >= 60 days (2026-02-09 11:06 --> 2026-05-10 12:05)
   ETS/"eTLS", visibility info  not present
   Certificate Revocation List  http://c.pki.goog/wr1/jWg-VIyZ1sY.crl
   OCSP URI                     http://o.pki.goog/s/wr1/tNE
   OCSP stapling                offered, not revoked
   OCSP must staple extension   --
   DNS CAA RR (experimental)    not offered
   Certificate Transparency     yes (certificate extension)
   Certificates provided        3
   Issuer                       WR1 (Google Trust Services from US)
   Intermediate cert validity   #1: ok > 40 days (2029-02-20 14:00). WR1 <-- GTS Root R1
                                #2: ok > 40 days (2028-01-28 00:00). GTS Root R1 <-- GlobalSign Root CA
   Intermediate Bad OCSP (exp.) Ok

  Server Certificate #2
   Signature Algorithm          ECDSA with SHA256
   Server key size              EC 256 bits (curve P-256)
   Server key usage             Digital Signature
   Server extended key usage    TLS Web Server Authentication
   Serial                       B6C41D0564AC5B5A0E697FA5C1CA0E03 (OK: length 16)
   Fingerprints                 SHA1 54AE2DA9DCA39E729AC15D60A9B5CC4D7FCC5D60
                                SHA256 693D1B81BB5DC662557AAF8C66AF52D7373BC765AF3427AFDC145FAE6D8FA7B0
   Common Name (CN)             scenter.int.fxall.com  (request w/o SNI didn't succeed, usual for EC certificates)
   subjectAltName (SAN)         scenter.int.fxall.com 
   Trust (hostname)             Ok via SAN and CN (SNI mandatory)
   Chain of trust               Ok   
   EV cert (experimental)       no 
   Certificate Validity (UTC)   87 >= 60 days (2026-02-09 11:06 --> 2026-05-10 12:06)
   ETS/"eTLS", visibility info  not present
   Certificate Revocation List  http://c.pki.goog/we1/jOS_4m-LORs.crl
   OCSP URI                     http://o.pki.goog/s/we1/tsQ
   OCSP stapling                offered, not revoked
   OCSP must staple extension   --
   DNS CAA RR (experimental)    not offered
   Certificate Transparency     yes (certificate extension)
   Certificates provided        3
   Issuer                       WE1 (Google Trust Services from US)
   Intermediate cert validity   #1: ok > 40 days (2029-02-20 14:00). WE1 <-- GTS Root R4
                                #2: ok > 40 days (2028-01-28 00:00). GTS Root R4 <-- GlobalSign Root CA
   Intermediate Bad OCSP (exp.) Ok


 Testing HTTP header response @ "/" 

 HTTP Status Code             403 Forbidden
 HTTP clock skew              0 sec from localtime
 IPv4 address in header       set-cookie: __cf_bm=v7RG8WSKSBbsR2Ge.EgEKIDiBL__sPpBF3GUwSGBqW8-1770842070.576966-1.0.1.1-Ve8spoX_pthWOg.xMQUVzvSfzOEqYJBFGOSC5O3LhxC3iwPcksWW_GK76fXLA5_Yf5Qstvzx89CFHf.YFOQG7peopXaCaXb6g7pSfUDYv1_n6mg8C9xB8ZqWvgVdDjpe; HttpOnly; Secure; Path=/; Domain=fxall.com; Expires=Wed, 11 Feb 2026 21:04:30 GMT
                              (check if it's your IP address or e.g. a cluster IP)
 Strict Transport Security    not offered
 Public Key Pinning           --
 Server banner                cloudflare
 Application banner           --
 Cookie(s)                    1 issued: 1/1 secure, 1/1 HttpOnly -- HTTP status 403 signals you maybe missed the web application
 Security headers             --
 Reverse Proxy banner         --


 Testing vulnerabilities 

 Heartbleed (CVE-2014-0160)                not vulnerable (OK), no heartbeat extension
 CCS (CVE-2014-0224)                       not vulnerable (OK)
 Ticketbleed (CVE-2016-9244), experiment.  not vulnerable (OK)
 ROBOT                                     not vulnerable (OK)
 Secure Renegotiation (RFC 5746)           supported (OK)
 Secure Client-Initiated Renegotiation     not vulnerable (OK)
 CRIME, TLS (CVE-2012-4929)                not vulnerable (OK)
 BREACH (CVE-2013-3587)                    potentially NOT ok, "gzip" HTTP compression detected. - only supplied "/" tested
                                           Can be ignored for static pages or if no secrets in the page
 POODLE, SSL (CVE-2014-3566)               not vulnerable (OK), no SSLv3 support
 TLS_FALLBACK_SCSV (RFC 7507)              No fallback possible (OK), no protocol below TLS 1.2 offered
 SWEET32 (CVE-2016-2183, CVE-2016-6329)    not vulnerable (OK)
 FREAK (CVE-2015-0204)                     not vulnerable (OK)
 DROWN (CVE-2016-0800, CVE-2016-0703)      not vulnerable on this host and port (OK)
                                           make sure you don't use this certificate elsewhere with SSLv2 enabled services, see
                                           https://search.censys.io/search?resource=hosts&virtual_hosts=INCLUDE&q=1AEFB847C597B8A1C3EF750A21B0C5D830312476653DDCD98C15174B5195AE6E
 LOGJAM (CVE-2015-4000), experimental      not vulnerable (OK): no DH EXPORT ciphers, no DH key detected with <= TLS 1.2
 BEAST (CVE-2011-3389)                     not vulnerable (OK), no SSL3 or TLS1
 LUCKY13 (CVE-2013-0169), experimental     potentially VULNERABLE, uses obsolete cipher block chaining ciphers with TLS, see server prefs.
 Winshock (CVE-2014-6321), experimental    not vulnerable (OK)
 RC4 (CVE-2013-2566, CVE-2015-2808)        no RC4 ciphers detected (OK)


 Running client simulations (HTTP) via sockets 

 Browser                      Protocol  Cipher Suite Name (OpenSSL)       Forward Secrecy
------------------------------------------------------------------------------------------------
 Android 7.0 (native)         TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 Android 8.1 (native)         TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     253 bit ECDH (X25519)
 Android 9.0 (native)         TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Android 10.0 (native)        TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Android 11/12 (native)       TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Android 13/14 (native)       TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Android 15 (native)          TLSv1.3   TLS_AES_128_GCM_SHA256            X25519MLKEM768
 Chrome 101 (Win 10)          TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Chromium 137 (Win 11)        TLSv1.3   TLS_AES_128_GCM_SHA256            X25519MLKEM768
 Firefox 100 (Win 10)         TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Firefox 137 (Win 11)         TLSv1.3   TLS_AES_128_GCM_SHA256            X25519MLKEM768
 IE 8 Win 7                   No connection
 IE 11 Win 7                  TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 IE 11 Win 8.1                TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 IE 11 Win Phone 8.1          TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 IE 11 Win 10                 TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 Edge 15 Win 10               TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     253 bit ECDH (X25519)
 Edge 101 Win 10 21H2         TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Edge 133 Win 11 23H2         TLSv1.3   TLS_AES_128_GCM_SHA256            X25519MLKEM768
 Safari 18.4 (iOS 18.4)       TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Safari 15.4 (macOS 12.3.1)   TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Safari 18.4 (macOS 15.4)     TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 Java 7u25                    No connection
 Java 8u442 (OpenJDK)         TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 Java 11.0.2 (OpenJDK)        TLSv1.3   TLS_AES_128_GCM_SHA256            256 bit ECDH (P-256)
 Java 17.0.3 (OpenJDK)        TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 Java 21.0.6 (OpenJDK)        TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 go 1.17.8                    TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)
 LibreSSL 3.3.6 (macOS)       TLSv1.3   TLS_CHACHA20_POLY1305_SHA256      253 bit ECDH (X25519)
 OpenSSL 1.0.2e               TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 OpenSSL 1.1.1d (Debian)      TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 OpenSSL 3.0.15 (Debian)      TLSv1.3   TLS_AES_256_GCM_SHA384            253 bit ECDH (X25519)
 OpenSSL 3.5.0 (git)          TLSv1.3   TLS_AES_256_GCM_SHA384            X25519MLKEM768
 Apple Mail (16.0)            TLSv1.2   ECDHE-ECDSA-AES128-GCM-SHA256     256 bit ECDH (P-256)
 Thunderbird (91.9)           TLSv1.3   TLS_AES_128_GCM_SHA256            253 bit ECDH (X25519)


 Rating (experimental) 

 Rating specs (not complete)  SSL Labs's 'SSL Server Rating Guide' (version 2009r from 2025-05-16)
 Specification documentation  https://github.com/ssllabs/research/wiki/SSL-Server-Rating-Guide
 Protocol Support (weighted)  100 (30)
 Key Exchange     (weighted)  90 (27)
 Cipher Strength  (weighted)  90 (36)
 Final Score                  93
 Overall Grade                A+

 Done 2026-02-11 14:35:59 [0563s] -->> 159.220.97.9:443 (scenter.int.fxall.com) <<--

----------------------------------------------------------------------------------------------------------------------------------------
Done testing now all IP addresses (on port 443): 159.220.97.8 159.220.97.9

Luiss-MacBook-Pro:testssl luis.romero$ 
