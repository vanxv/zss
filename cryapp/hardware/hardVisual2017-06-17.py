import ctypes
from ctypes import *
import os, sys
import time
import wmi,zlib
import requests
c = wmi.WMI()
dll = CDLL("visual.dll")
visual =int(dll.main())
visual =int(0)

print(visual)
print('***finish***')

print('***next Hardid***')
cpuid = ''
diskid = ''
boardid = ''
biosid = ''
#cpuid
try:
    for cpu in c.Win32_Processor():
        cpuid = cpu.ProcessorId.strip()
        print("cpu id:", cpuid)
except:
        print("cpu id:NO")
#diskid
try:
    for physical_disk in c.Win32_DiskDrive():
        diskid = physical_disk.SerialNumber.strip()
        print(diskid)
except:
        print("disk id:NO")
      
#boardid
try:
    for board_id in c.Win32_BaseBoard():
        boardid = board_id.SerialNumber.strip()
        print("main board id:",boardid)
        
except:
        print("main board id:NO")

    
#biosid
try:
    for bios_id in c.Win32_BIOS():
        biosid = bios_id.SerialNumber.strip()
        print("bios number:", biosid)
except:
        print("bios number id:NO")

hardand = cpuid + diskid + boardid + biosid
hardkeycode = str.encode(hardand)
hardkey = zlib.adler32(hardkeycode)
print(hardkey)
print(type(hardkey))
### top hardware###

### next post###
username= 'admin'
password= '1121hotsren'
url = "http://www.zhess.com/users/PcHardwareInsert/"
data= {
    'username':username,
    'password':password,
    'cpuid':cpuid,
    'diskid':diskid,
    'boardid':boardid,
    'biosid':biosid,
    'visual':visual,
    'hardkey':hardkey,
    }

session = requests.Session()
f = session.post(url, data=data)
print(f.content)
print(f.content.decode())
### top post###
