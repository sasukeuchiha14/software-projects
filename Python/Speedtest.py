import speedtest as spt

test = spt.Speedtest()

print("Download Speed: ",test.download()/1000000, " Mpbs")
print("Upload Speed: ",test.upload()/1000000," Mpbs")
print("Ping: ",test.results.ping," ms")