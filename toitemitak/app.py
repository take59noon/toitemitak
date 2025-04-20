from http.server import SimpleHTTPRequestHandler, HTTPServer
import sys

DEFAULT_PORT = 8080  # PORTのデフォルト値


# ポート番号の設定
if len(sys.argv) == 2:
    port_str = sys.argv[1]

    if port_str.isdecimal():
        port = int(port_str)
    else:
        sys.exit("Invalid value: PORT must be decimal numbers.")

elif len(sys.argv) > 2:
    sys.exit("Usage: python app.py PORT")
else:
    port = DEFAULT_PORT


# キャッシュ無効の設定
class NoCacheHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_handlers(self):
        self.send_header('Cache-Control','private, no-store, no-cache, must-revalidate')
        self.send_header('Pragma','no-cache')
        self.send_header('Expires','0')
        super().end_headers()


server = HTTPServer(('', port), NoCacheHTTPRequestHandler)
server.serve_forever()  # 常時受け付けモードを指定
