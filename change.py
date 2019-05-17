import re

def double(matched):
    value = int(matched.group('value')[0:-2])
    return str(value * 2) + "rpx"


with open('./pages/address/edit_address/edit_address.wxml', 'r+') as f:
    aline = f.readlines()
    info = ""
    aline = info.join(aline)
    f.seek(0)
    f.truncate()
    f.write(re.sub('(?P<value>(\d+)px)', double, aline))