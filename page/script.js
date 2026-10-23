/* 229 palettes. Original IDs, sources, names and color order are retained.
 * #123 intentionally preserves the invalid original value #T3ABCF.
 */
"use strict";

const RAW_PALETTES = [
  [1,"zhihu","nameless","#000080 #B22222"],
  [2,"zhihu","nameless","#ACD6EC #F5A889"],
  [3,"zhihu","nameless","#148F28 #EA71AE"],
  [4,"zhihu","nameless","#91CAE8 #F48892"],
  [5,"zhihu","nameless","#BDB9B8 #DFEBD5"],
  [6,"zhihu","nameless","#BEBAB9 #C47070"],
  [7,"zhihu","nameless","#629433 #FEFF99"],
  [8,"zhihu","nameless","#BFBBBA #CFDAEC"],
  [9,"zhihu","nameless","#050507 #1399B2"],
  [10,"zhihu","nameless","#BEBAB9 #DBB8B2"],
  [11,"zhihu","nameless","#8E7FB8 #A2C9AE"],
  [12,"zhihu","nameless","#6888F5 #D77071"],
  [13,"zhihu","nameless","#000000 #2C939A #A6A3A4"],
  [14,"zhihu","nameless","#9ACE87 #D2D2D2 #EE634B"],
  [15,"zhihu","nameless","#38C1F3 #8048AA #FF0000"],
  [16,"zhihu","nameless","#009E73 #B02226 #F0A12C"],
  [17,"zhihu","nameless","#A9CA70 #C5D6F0 #F18C54"],
  [18,"zhihu","nameless","#0E986F #796CAD #D65813"],
  [19,"zhihu","nameless","#377EB9 #4DAE48 #974F9F"],
  [20,"zhihu","nameless","#D0DD97 #DDDDDD #E6B745"],
  [21,"zhihu","nameless","#5BB5AC #D8B365 #DE526C"],
  [22,"zhihu","nameless","#7EA6D9 #D4E6BC #F8F2A4"],
  [23,"zhihu","nameless","#2B5863 #6A8078 #9D9D9D"],
  [24,"zhihu","nameless","#23BAC5 #EECA40 #FD763F"],
  [25,"zhihu","nameless","#00A14E #688CC8 #ECE70F"],
  [26,"zhihu","nameless","#91BFFA #F2F2F2 #FFFEDF"],
  [27,"zhihu","nameless","#43A3EF #EF767B #F9E7A7"],
  [28,"zhihu","nameless","#1C3C63 #93C8C0 #D3D5D4"],
  [29,"zhihu","nameless","#7998AD #F07673 #FFF1CF"],
  [30,"zhihu","nameless","#8583A9 #A0BDD5 #CA8BA8"],
  [31,"zhihu","nameless","#85D0FF #C2C48D #FFDC8E"],
  [32,"zhihu","nameless","#E0EBEB #F7BDA9 #FBDED4"],
  [33,"zhihu","nameless","#000000 #81B8DA #EFC57F"],
  [34,"zhihu","nameless","#4370B4 #549F9A #C30078"],
  [35,"zhihu","nameless","#2472A3 #A5B55D #F4F3EE"],
  [36,"zhihu","nameless","#94B5D8 #ACD2C7 #D57B70"],
  [37,"zhihu","nameless","#4C4D4F #97A9B7 #A5CCC7"],
  [38,"zhihu","nameless","#688660 #9A5747 #F5F6BA"],
  [39,"zhihu","nameless","#5CB3BA #F3D707 #FF5E00"],
  [40,"zhihu","nameless","#262626 #293890 #BF1D2D"],
  [41,"zhihu","nameless","#040676 #397FC7 #F1B656"],
  [42,"zhihu","nameless","#6D65A3 #6F6F6F #F6631C"],
  [43,"zhihu","nameless","#9998FF #C99BFF #FF9A9B"],
  [44,"zhihu","nameless","#2C91E0 #3ABF99 #F0A73A"],
  [45,"zhihu","nameless","#C2DACF #C2DCE9 #EAE1EF #F8F3EB"],
  [46,"zhihu","nameless","#85C3DC #8DAFAB #DAC6CF #E2C098"],
  [47,"zhihu","nameless","#383838 #5CA7C7 #D4352D #FBCE6A"],
  [48,"zhihu","nameless","#98C897 #9C6BA3 #9DBAD2 #FE9C9D"],
  [49,"zhihu","nameless","#D3D2D2 #D6E6F2 #D7F0D0 #FAC4CC"],
  [50,"zhihu","nameless","#EAF3FC #F4F4F4 #F4F9F2 #FFE7E7"],
  [51,"zhihu","nameless","#8FA2CD #CC976B #E07F86 #F8BC7E"],
  [52,"zhihu","nameless","#5EA0C7 #6BC179 #B4D7E5 #BEDEAB"],
  [53,"zhihu","nameless","#6F8A91 #93AC93 #DEAA87 #E9DDAF"],
  [54,"zhihu","nameless","#1999B2 #95BCE5 #E84445 #F39DA0"],
  [55,"zhihu","nameless","#9BDCFC #C9EFBE #CAC8EF #F0CFEA"],
  [56,"zhihu","nameless","#91BFFA #EAEAEA #FF7F00 #FFE0C1"],
  [57,"zhihu","nameless","#074166 #8CC5BE #CC011F #FADADD"],
  [58,"zhihu","nameless","#59B78F #6A8EC9 #7A378A #E84446"],
  [59,"zhihu","nameless","#75C298 #A0ADD0 #E47178 #F5DC75"],
  [60,"zhihu","nameless","#8EC8ED #AED594 #D693BE #F5B3A5"],
  [61,"zhihu","nameless","#0B0B09 #223474 #9CC7F1 #EED26E"],
  [62,"zhihu","nameless","#1CC3C9 #70A0AA #8194A0 #89909E"],
  [63,"zhihu","nameless","#3D89A3 #5EC7D0 #838482 #F1D756"],
  [64,"zhihu","nameless","#018A67 #1868B2 #DE582B #F3A332"],
  [65,"zhihu","nameless","#010101 #069DFF #808080 #A4E048"],
  [66,"zhihu","nameless","#0001A1 #037F77 #BABABA #C5272D"],
  [67,"zhihu","nameless","#32037D #7C1A97 #C94E65 #D9995B"],
  [68,"zhihu","nameless","#015493 #019092 #999999 #F4A99B"],
  [69,"zhihu","nameless","#0095FF #019092 #6FDCB5 #909090"],
  [70,"zhihu","nameless","#2F2D54 #9193B4 #BD9AAD #E8D2B3"],
  [71,"zhihu","nameless","#7C9D97 #9CB0C3 #D6D6D6 #EAB080"],
  [72,"zhihu","nameless","#4FBD81 #5DBFE9 #ADE0B4 #E7E6D4"],
  [73,"zhihu","nameless","#237B9F #71BFB2 #AD0B08 #EC817E #FEE066"],
  [74,"zhihu","nameless","#7399F4 #7AB656 #925EB0 #A5AEB7 #CC7C71"],
  [75,"zhihu","nameless","#9BBBE1 #9D9EA3 #B7B7EB #EAB883 #F09BA0"],
  [76,"zhihu","nameless","#3E4F94 #3E90BF #A6C0E3 #D8D3E7 #FAF9CB"],
  [77,"zhihu","nameless","#000000 #0071BD #C2272B #DAE9E4 #FFF2D8"],
  [78,"zhihu","nameless","#4C4D4F #7A9590 #97A9B7 #AED6D5 #B86078"],
  [79,"zhihu","nameless","#2673EF #CD5257 #E8E8E8 #F2BA2F #FAEADF"],
  [80,"zhihu","nameless","#4F7D78 #CC141E #D2D699 #FFD153 #FFECC2"],
  [81,"zhihu","nameless","#95B6EC #D3D3D3 #E98D83 #FFCBAA #FFFBED"],
  [82,"zhihu","nameless","#80D0C3 #9EAAC4 #A6DDEA #F3A59A #F9CDBF"],
  [83,"zhihu","nameless","#000084 #870A4C #95A8D2 #C3EAB5 #C5767B"],
  [84,"zhihu","nameless","#0A87D7 #6F5B9B #81AA2A #AEA3CD #B5711E"],
  [85,"zhihu","nameless","#9BBBE1 #BABABC #C8C2E4 #E0B77F #F09BA0"],
  [86,"zhihu","nameless","#074C9B #4292C6 #BD0026 #FD8D3C #FFFFB2"],
  [87,"zhihu","nameless","#37AB78 #589FF3 #808080 #F3B169 #F94141"],
  [88,"zhihu","nameless","#5B3660 #60966D #63ADEE #E90F44 #FFC839"],
  [89,"zhihu","nameless","#A7D2BA #ABC6E4 #C39398 #D0CADE #FCDABA"],
  [90,"zhihu","nameless","#4A4F7E #719AAC #72B063 #94C6CD #B8DBB3 #E29135"],
  [91,"zhihu","nameless","#3E608D #4E1945 #8CBF87 #8D2F25 #909291 #CB9475"],
  [92,"zhihu","nameless","#A0D0D0 #A7C0DF #B7F5DE #D5AABE #DCA7EB #EAE936"],
  [93,"zhihu","nameless","#547BB4 #629C35 #6C61AF #6F6F6F #C0321A #DD7C4F"],
  [94,"zhihu","nameless","#257D8B #68BED9 #BFDFD2 #EAA558 #ED8D5A #EFCE87"],
  [95,"zhihu","nameless","#156434 #218D42 #4583B6 #4DB748 #B02425 #FAA419"],
  [96,"zhihu","nameless","#156434 #1F8E42 #4583B6 #4DB748 #B02425 #FAA419"],
  [97,"zhihu","nameless","#79438E #7EA4D1 #807C7D #82AD7F #C1565E #DCA96A"],
  [98,"zhihu","nameless","#000000 #32183C #36659E #40B7AD #A21A54 #E7724F"],
  [99,"zhihu","nameless","#B6B3D6 #CFCFD0 #DAD7E9 #E9687A #F58F7A #FDE2D8"],
  [100,"zhihu","nameless","#1F77B4 #282973 #47A1A2 #708090 #DAA628 #F9BFCB"],
  [101,"zhihu","nameless","#B2DBB9 #B8E5FA #EEC186 #EEF0A7 #F7A6AC #F7B7D2"],
  [102,"zhihu","nameless","#099A63 #55A0FB #91BFFA #A09FA4 #AD07E3 #FEA0A0"],
  [103,"zhihu","nameless","#3AB5B3 #5567B1 #80C66D #954F97 #B3D5F1 #F0686C"],
  [104,"zhihu","nameless","#3C9BC9 #76CBB4 #F88455 #FC757B #FDCA93 #FFE59B"],
  [105,"zhihu","nameless","#669A38 #6897CF #EDEDEF #F3ED99 #F58C86 #F6D586"],
  [106,"zhihu","nameless","#3B5BA8 #73ABE4 #751A29 #759D3A #AC4828 #CFA72D"],
  [107,"zhihu","nameless","#45546A #4770B5 #71AD48 #A3A3A3 #ED7D31 #FBBE0A"],
  [108,"zhihu","nameless","#6AD1A3 #84ADDC #88B6F1 #989898 #FF988B #FFDE7B"],
  [109,"zhihu","nameless","#8BABD3 #A58BD4 #ADDEAD #D7B0B0 #DDAF70 #DE767C"],
  [110,"zhihu","nameless","#377EB8 #BFBFBF #D2EBD2 #E1F3FA #E41A1C #FFF0B1"],
  [111,"zhihu","nameless","#36A9E1 #5C6572 #ADB2B9 #C2E5F6 #EB5B25 #F5AD92"],
  [112,"zhihu","nameless","#80A3D5 #AA8873 #BF91D5 #D4C140 #FF8080 #FFBB80"],
  [113,"zhihu","nameless","#478AC1 #8A9B6D #98C9D5 #C198B3 #E4B78A #FFEEC0"],
  [114,"zhihu","nameless","#178642 #2356A7 #83B6E1 #A0D293 #ED342F #F69A9B"],
  [115,"zhihu","nameless","#000000 #345684 #878787 #A21549 #C3752B #DAC1A2"],
  [116,"zhihu","nameless","#496648 #8D8988 #9DBF83 #AC151C #D2878C #F5F291"],
  [117,"zhihu","nameless","#391A53 #3B4293 #828387 #8F1B26 #91C6F2 #974F91"],
  [118,"zhihu","nameless","#2481C4 #8A8A88 #C4C2DA #C7C7C5 #DE061E #F7D8D6"],
  [119,"zhihu","nameless","#0C4E9B #6B98C4 #C72228 #F5867F #F98F34 #FFBC80"],
  [120,"zhihu","nameless","#3B549D #6BBC46 #9EAAD1 #B4DEA2 #D3272B #F29091"],
  [121,"zhihu","nameless","#000000 #23B2E0 #A5CC5B #C2C2C2 #EEBEC0 #EF2C2B"],
  [122,"zhihu","nameless","#000000 #338FEB #5CA400 #8BCF02 #B31761 #E7308B"],
  [123,"zhihu","nameless","#354898 #6B6B6B #972D36 #C55645 #FAAE5F #T3ABCF"],
  [124,"zhihu","nameless","#168676 #27447C #4871B3 #991F22 #B88640 #E73C36"],
  [125,"zhihu","nameless","#3E6790 #646774 #6483A4 #858892 #AF873E #BD9E64"],
  [126,"zhihu","nameless","#324C63 #386195 #3981AF #5499BD #6FB9D0 #91CDC8"],
  [127,"zhihu","nameless","#80B1D3 #8DD1C6 #BDBADB #F47F72 #FBB463 #FBF8B4"],
  [128,"zhihu","nameless","#4485C7 #682487 #7ABBDB #84BA42 #A51C36 #D4562E #DBB428"],
  [129,"zhihu","nameless","#979998 #C69287 #DDDDDF #E4CD87 #E79A90 #EFBC91 #FAE5B8"],
  [130,"zhihu","nameless","#004600 #18BECF #78B428 #7F7F7F #BCBD23 #C8E63C #FFE494"],
  [131,"zhihu","nameless","#000000 #098036 #4B57A2 #D3D3D3 #EE7D80 #F9BE80 #FCDFC0"],
  [132,"zhihu","nameless","#349F2B #666666 #66A61E #A5761C #B2DF8A #CCCCCC #E5AB02"],
  [133,"zhihu","nameless","#00ADEF #63BA45 #D7DCBE #D9DDBA #E69C81 #E6BA9D #E7CEA5"],
  [134,"zhihu","nameless","#9DD3AF #C0E2CA #D1B494 #D9EEDF #E0C79F #F1DEBD #FFFBD5"],
  [135,"zhihu","nameless","#581036 #6E8E9D #777777 #97A4AA #A65655 #B98E95 #F3EAE1"],
  [136,"zhihu","nameless","#6295D7 #67AFD5 #6AB3A2 #7488C5 #95A938 #AD3688 #CA645F"],
  [137,"zhihu","nameless","#87A4EA #898CF3 #9881F3 #A1C6E0 #B6D3CF #D0BEB0 #D7D1C5"],
  [138,"zhihu","nameless","#34183E #4D779B #585D5E #606060 #82093B #C45C69 #CD3B42 #FFC04D"],
  [139,"zhihu","nameless","#38917E #3C518F #4D0085 #989ED9 #A1D4A2 #A47DC0 #C6A550 #DB7272"],
  [140,"zhihu","nameless","#92B9BE #949B93 #A9D3AD #CDE3A5 #E7F5F6 #F4F7FE #F5DF4D #F6F8F7"],
  [141,"zhihu","nameless","#7DC69B #9BD7F3 #D5EAD9 #D8EEFB #DCD7EB #F2A1A7 #FBDDDD #FCE6CF"],
  [142,"zhihu","nameless","#000000 #283D7E #467D80 #4F8B57 #5291B2 #7347BA #91CC7A #D8A266"],
  [143,"zhihu","nameless","#6C85F9 #939DE4 #A2C6D6 #BDD69F #D9503D #DEA441 #E9B9E1 #EBC98A"],
  [144,"zhihu","nameless","#0000FF #5E8FC5 #79C5CE #B9DBF4 #CE6090 #EEF4FB #F15A22 #F9A31A"],
  [145,"zhihu","nameless","#8DAD95 #9DA190 #A6BA89 #C2D794 #C4A880 #D0FFB1 #DAD184 #EBA782"],
  [146,"zhihu","nameless","#000000 #1D71B9 #5AAE61 #6BAFD6 #878787 #9970AC #A5761C #CBBBA1"],
  [147,"zhihu","nameless","#4E606E #6A8864 #9E5648 #A56B45 #B5BCC2 #B7C685 #BD8A99 #CDBB71"],
  [148,"zhihu","nameless","#ABD1BC #BED0F9 #CCCC99 #DBE4FB #E3BBED #EDC3A5 #F1F1F1 #FCB6A5 #FDEBAA"],
  [149,"zhihu","nameless","#7789B7 #89AA7B #9DACCB #ACBF9F #C6CCBC #CBD7C3 #D6D6D6 #EB6969 #F0EEEF"],
  [150,"zhihu","nameless","#008A45 #468BCA #5F5F5E #7DD2F6 #80C5A2 #B384BA #D9C2DD #F27873 #FFD373"],
  [151,"zhihu","nameless","#666666 #808080 #9BADB2 #A02C2C #CCBCBC #CCCCCC #E5DEDE #F4E3D7 #FFB889"],
  [152,"zhihu","nameless","#389AB3 #5CA9BB #858786 #87BBAF #CAC658 #E1B224 #E7C21C #E97123 #ED2225"],
  [153,"zhihu","nameless","#1D91C2 #205EA7 #205EA7 #38B6C4 #3BB6C5 #7ECBB9 #965478 #C8E2B2 #EAF0B2"],
  [154,"zhihu","nameless","#008E8A #176A7A #2E4857 #39B086 #88CF73 #DDE554 #DFE662 #E00200 #F8AF62"],
  [155,"zhihu","nameless","#5BA9BD #95BE54 #9D6067 #A93935 #B0783D #D5A6A0 #DBCC57 #DCDE8B #E0BB6D"],
  [156,"zhihu","nameless","#508D40 #65A8EC #8C4E29 #96A4C7 #A9B233 #B7C6E5 #D38386 #DB9C4D #DDA5C8"],
  [157,"zhihu","nameless","#75B0B4 #806CAB #869C76 #AD4641 #AFAFAD #AFC9A6 #B4C4E5 #D19692 #DED0A1"],
  [158,"zhihu","nameless","#00BBF9 #1E90FF #22A884 #22A884 #2A788E #4AAC44 #7AD151 #EB1C4A #FF8C00"],
  [159,"zhihu","nameless","#3D5DA8 #694F98 #B2B0D7 #B90978 #C2DCAF #CE7A5E #D6E1F5 #DBA43F #ECDE93"],
  [160,"zhihu","nameless","#291173 #356529 #611A44 #629586 #832F87 #858A2E #95BEEC #A75265 #CBC46A #D5D5D5"],
  [161,"zhihu","nameless","#40B0A6 #6D8EF7 #6E579A #A38E89 #A5C8DD #CD5582 #E1BE6A #E1BE6A #E89A7A #EC6B2D"],
  [162,"zhihu","nameless","#016450 #237B7A #4592A5 #67A9CF #7D4C99 #8AB6D7 #9FAAD1 #ADC4DE #D0D1E6 #D0DAEB"],
  [163,"zhihu","nameless","#2900F2 #75AAB8 #8985B7 #A04646 #A3C98E #AE3019 #B3C4D4 #B58C9A #CFC580 #DCCB59 #E8DF92"],
  [164,"zhihu","nameless","#484848 #666666 #999999 #99D1D0 #9F6BBF #A0B3DC #BEA4BD #CCCCCC #CF66A5 #FAC5C6 #FCDFC7"],
  [165,"zhihu","nameless","#858585 #93B190 #B6E2FB #B9BB8E #D1D1D1 #DB6A5D #DFDEE1 #E1E3FF #E4CAD1 #FCCFE7 #FF8901"],
  [166,"zhihu","nameless","#596AAF #75A6DE #75AD8A #7EB1A0 #A4C962 #B0CBE6 #B3D250 #C8795A #D0813C #D4C649 #DEBB5D"],
  [167,"zhihu","nameless","#7895C1 #8074C8 #992224 #A8CBDF #B54764 #D6EFF4 #E3625D #EF8B67 #F0C284 #F2FAFC #F5EBAE #F7FBC9"],
  [168,"zhihu","nameless","#0072BD #08306B #08519C #2171B5 #6BAED6 #77AC30 #969696 #C6DBEF #D95319 #EDB120 #FED976 #FFFFCC"],
  [169,"zhihu","nameless","#5861AC #6AB4C1 #6B7EB9 #70B48F #72C3A3 #A5C2E2 #F28080 #FEA040 #FF6100 #FF7F00 #FFC080 #FFE0C1"],
  [170,"zhihu","nameless","#2C6344 #308192 #5EA7B8 #5F9C61 #61496D #A4C97C #AED2E2 #B092B6 #C74D26 #CAC1D4 #E38D26 #F1CC74"],
  [171,"zhihu","nameless","#4626F6 #6C0E0F #7B1415 #8479F9 #9CAD8B #CB181C #CE403F #D3D0FD #DB8382 #DFE8D5 #EBCEC0 #ECD2D3"],
  [172,"zhihu","nameless","#654E5E #78828B #A49193 #B5C9BE #C89D94 #D3DCE3 #D6E3D2 #DECCA6 #E0DEDF #EDE7D9 #EFE1D6 #F3E3E3"],
  [173,"zhihu","nameless","#26445E #474769 #4C7780 #73A5A2 #7C4D77 #B2B6C1 #B55384 #C76B60 #D68438 #D6E2E2 #E4A031 #F0EFED #F3DBC1 #F6E2C1"],
  [174,"zhihu","nameless","#0000FE #00688B #01008A #1E90FF #228B22 #566B30 #698B6A #8370FE #8B8378 #8B864E #A020EF #FE0000 #FF7F00 #FFB90F"],
  [175,"zhihu","nameless","#000000 #262A85 #4C9140 #519475 #5B99E6 #5D2B84 #6A4C30 #ACCBE8 #BE3731 #C65537 #DDA43D #EDDB31 #EDF4FA #F1EBED"],
  [176,"zhihu","nameless","#2D8875 #52AADC #7C7979 #7FABD1 #91CCC0 #963B79 #97D0C5 #B5CE4E #BD7795 #C7C1DE #C89736 #D75B4E #EC6E66 #EEB6D4 #F39865 #F7AC53"],
  [177,"zhihu","nameless","#00A664 #3FA0C0 #4C6C43 #5086C4 #7C7CBA #B55489 #C7B8BD #D5D9E5 #D5D9E5 #D6E0C8 #D6E0C8 #DCE125 #F0A19A #F9ED1D #FEDEC5 #FFF0BC"],
  [178,"Rpk{ggsci}","pal_aaas","#3B4992 #EE0000 #008B45 #631879 #008280 #BB0021 #5F559B #A20056 #808180 #1B1919"],
  [179,"Rpk{ggsci}","pal_atlassian","#4688EC #94C748 #C97CF4 #FCA700 #1558BC #964AC0 #42B2D7 #E06C00"],
  [180,"Rpk{ggsci}","pal_bmj","#2A6EBB #F0AB00 #C50084 #7D5CC6 #E37222 #69BE28 #00B2A9 #CD202C #747678"],
  [181,"Rpk{ggsci}","pal_bs5","#CEE1FF #A3C8FD #78AEFE #4C94FC #237AFF #0363EA #0A50B8 #073D8C #04295F #021533"],
  [182,"Rpk{ggsci}","pal_cosmic","#2E2A2B #CF4E9C #8C57A2 #358DB9 #82581F #2F509E #E5614C #97A1A7 #3DA873 #DC9445"],
  [183,"Rpk{ggsci}","pal_d3","#1F77B4 #FF7F0E #2CA02C #D62728 #9467BD #8C564B #E377C2 #7F7F7F #BCBD22 #17BECF"],
  [184,"Rpk{ggsci}","pal_flatui","#C0392B #D35400 #F39C12 #27AE60 #16A085 #2980B9 #8E44AD #2C3E50 #7F8C8D #BDC3C7"],
  [185,"Rpk{ggsci}","pal_frontiers","#D51317 #F39200 #EFD500 #95C11F #007B3D #31B7BC #0094CD #164194 #6F286A #706F6F"],
  [186,"Rpk{ggsci}","pal_futurama","#FF6F00 #C71000 #008EA0 #8A4198 #5A9599 #FF6348 #84D7E1 #FF95A8 #3D3B25 #ADE2D0 #1A5354 #3F4041"],
  [187,"Rpk{ggsci}","pal_gsea","#4500AC #2600D1 #6B58EE #8787FF #C6C0FF #D4D4FF #FFBFE5 #FF8888 #FF707F #FF5959 #EE3F3F #D60C00"],
  [188,"Rpk{ggsci}","pal_igv","#5050FF #CE3D32 #749B58 #F0E685 #466983 #BA6338 #5DB1DD #802268 #6BD76B #D595A7 #924822 #837B8D #C75127 #D58F5C #7A65A5 #E4AF69 #3B1B53 #CDDEB7 #612A79 #AE1F63 #E7C76F #5A655E #CC9900 #99CC00 #A9A9A9 #CC9900 #99CC00 #33CC00 #00CC33 #00CC99 #0099CC #0A47FF #4775FF #FFC20A #FFD147 #990033 #991A00 #996600 #809900 #339900 #00991A #009966 #008099 #003399 #1A0099 #660099 #990080 #D60047 #FF1463 #00D68F #14FFB1"],
  [189,"Rpk{ggsci}","pal_iterm","#00CDE8 #FFC739 #FF666D #9DEAF6 #B3E03A #A392E8"],
  [190,"Rpk{ggsci}","pal_jama","#374E55 #DF8F44 #00A1D5 #B24745 #79AF97 #6A6599 #80796B"],
  [191,"Rpk{ggsci}","pal_jco","#0073C2 #EFC000 #868686 #CD534C #7AA6DC #003C67 #8F7700 #3B3B3B #A73030 #4A6990"],
  [192,"Rpk{ggsci}","pal_lancet","#00468B #ED0000 #42B540 #0099B4 #925E9F #FDAF91 #AD002A #ADB6B6 #1B1919"],
  [193,"Rpk{ggsci}","pal_locuszoom","#D43F3A #EEA236 #5CB85C #46B8DA #357EBD #9632B8 #B8B8B8"],
  [194,"Rpk{ggsci}","pal_material","#FFEBED #FFCCD2 #EE9999 #E57272 #EE5250 #F34335 #E53934 #D22E2E #C52727 #B71B1B"],
  [195,"Rpk{ggsci}","pal_nejm","#BC3C29 #0072B5 #E18727 #20854E #7876B1 #6F99AD #FFDC91 #EE4C97"],
  [196,"Rpk{ggsci}","pal_npg","#E64B35 #4DBBD5 #00A087 #3C5488 #F39B7F #8491B4 #91D1C2 #DC0000 #7E6148 #B09C85"],
  [197,"Rpk{ggsci}","pal_observable","#4269D0 #EFB118 #FF725C #6CC5B0 #3CA951 #FF8AB7 #A463F2 #97BBF5 #9C6B4E #9498A0"],
  [198,"Rpk{ggsci}","pal_primer","#006EDB #EB670F #DF0C24 #179B9B #30A147 #894CEB #B88700 #CE2C85 #856D4C #527A29 #D43511 #167E53 #9D615C #64762D #A830E8 #866E04 #808FA3"],
  [199,"Rpk{ggsci}","pal_rickandmorty","#FAFD7C #82491E #24325F #B7E4F9 #FB6467 #526E2D #E762D7 #E89242 #FAE48B #A6EEE6 #917C5D #69C8EC"],
  [200,"Rpk{ggsci}","pal_simpsons","#FED439 #709AE1 #8A9197 #D2AF81 #FD7446 #D5E4A2 #197EC0 #F05C3B #46732E #71D0F5 #370335 #075149 #C80813 #91331F #1A9993 #FD8CC1"],
  [201,"Rpk{ggsci}","pal_startrek","#CC0C00 #5C88DA #84BD00 #FFCD00 #7C878E #00B5E2 #00AF66"],
  [202,"Rpk{ggsci}","pal_tron","#FF410D #6EE2FF #F7C530 #95CC5E #D0DFE6 #F79D1E #748AA6"],
  [203,"Rpk{ggsci}","pal_tw3","#F8F9FC #EFF3F8 #DEE5ED #BBC6D5 #7C8CA3 #516075 #39475B #222E40 #10182B #010617"],
  [204,"Rpk{ggsci}","pal_uchicago","#800000 #767676 #FFA319 #8A9045 #155F83 #C16622 #8F3931 #58593F #350E20"],
  [205,"Rpk{ggsci}","pal_ucscgb","#FF0000 #FF9900 #FFCC00 #00FF00 #6699FF #CC33FF #99991E #999999 #FF00CC #CC0000 #FFCCCC #FFFF00 #CCFF00 #358000 #0000CC #99CCFF #00FFFF #CCFFFF #9900CC #CC99FF #996600 #666600 #666666 #CCCCCC #79CC3D #CCCC99"],
  [206,"Rpk{grDevices}","R3","#000000 #FF0000 #00CD00 #0000FF #00FFFF #FF00FF #FFFF00 #BEBEBE"],
  [207,"Rpk{grDevices}","R4","#000000 #DF536B #61D04F #2297E6 #28E2E5 #CD0BBC #F5C710 #9E9E9E"],
  [208,"Rpk{grDevices}","ggplot2","#000000 #F8766D #00BA38 #619CFF #00BFC4 #F564E3 #B79F00 #9E9E9E"],
  [209,"Rpk{grDevices}","Okabe-Ito","#000000 #E69F00 #56B4E9 #009E73 #F0E442 #0072B2 #D55E00 #CC79A7 #999999"],
  [210,"Rpk{grDevices}","Accent","#7FC97F #BEAED4 #FDC086 #FFFF99 #386CB0 #F0027F #BF5B17 #666666"],
  [211,"Rpk{grDevices}","Dark 2","#1B9E77 #D95F02 #7570B3 #E7298A #66A61E #E6AB02 #A6761D #666666"],
  [212,"Rpk{grDevices}","Paired","#A6CEE3 #1F78B4 #B2DF8A #33A02C #FB9A99 #E31A1C #FDBF6F #FF7F00 #CAB2D6 #6A3D9A #FFFF99 #B15928"],
  [213,"Rpk{grDevices}","Pastel 1","#FBB4AE #B3CDE3 #CCEBC5 #DECBE4 #FED9A6 #FFFFCC #E5D8BD #FDDAEC #F2F2F2"],
  [214,"Rpk{grDevices}","Pastel 2","#B3E2CD #FDCDAC #CBD5E8 #F4CAE4 #E6F5C9 #FFF2AE #F1E2CC #CCCCCC"],
  [215,"Rpk{grDevices}","Set 1","#E41A1C #377EB8 #4DAF4A #984EA3 #FF7F00 #FFFF33 #A65628 #F781BF #999999"],
  [216,"Rpk{grDevices}","Set 2","#66C2A5 #FC8D62 #8DA0CB #E78AC3 #A6D854 #FFD92F #E5C494 #B3B3B3"],
  [217,"Rpk{grDevices}","Set 3","#8DD3C7 #FFFFB3 #BEBADA #FB8072 #80B1D3 #FDB462 #B3DE69 #FCCDE5 #D9D9D9 #BC80BD #CCEBC5 #FFED6F"],
  [218,"Rpk{grDevices}","Tableau 10","#4E79A7 #F28E2B #E15759 #76B7B2 #59A14F #EDC948 #B07AA1 #FF9DA7 #9C755F #BAB0AC"],
  [219,"Rpk{grDevices}","Classic Tableau","#1F77B4 #FF7F0E #2CA02C #D62728 #9467BD #8C564B #E377C2 #7F7F7F #BCBD22 #17BECF"],
  [220,"Rpk{grDevices}","Polychrome 36","#5A5156 #E4E1E3 #F6222E #FE00FA #16FF32 #3283FE #FEAF16 #B00068 #1CFFCE #90AD1C #2ED9FF #DEA0FD #AA0DFE #F8A19F #325A9B #C4451C #1C8356 #85660D #B10DA1 #FBE426 #1CBE4F #FA0087 #FC1CBF #F7E1A0 #C075A6 #782AB6 #AAF400 #BDCDFF #822E1C #B5EFB5 #7ED7D1 #1C7F93 #D85FF7 #683B79 #66B0FF #3B00FB"],
  [221,"Rpk{grDevices}","Alphabet","#AA0DFE #3283FE #85660D #782AB6 #565656 #1C8356 #16FF32 #F7E1A0 #E2E2E2 #1CBE4F #C4451C #DEA0FD #FE00FA #325A9B #FEAF16 #F8A19F #90AD1C #F6222E #1CFFCE #2ED9FF #B10DA1 #C075A6 #FC1CBF #B00068 #FBE426 #FA0087"],
  [222,"Rpk{RColorBrewer}","Accent","#7FC97F #BEAED4 #FDC086 #FFFF99 #386CB0 #F0027F #BF5B17 #666666"],
  [223,"Rpk{RColorBrewer}","Dark2","#1B9E77 #D95F02 #7570B3 #E7298A #66A61E #E6AB02 #A6761D #666666"],
  [224,"Rpk{RColorBrewer}","Paired","#A6CEE3 #1F78B4 #B2DF8A #33A02C #FB9A99 #E31A1C #FDBF6F #FF7F00 #CAB2D6 #6A3D9A #FFFF99 #B15928"],
  [225,"Rpk{RColorBrewer}","Pastel1","#FBB4AE #B3CDE3 #CCEBC5 #DECBE4 #FED9A6 #FFFFCC #E5D8BD #FDDAEC #F2F2F2"],
  [226,"Rpk{RColorBrewer}","Pastel2","#B3E2CD #FDCDAC #CBD5E8 #F4CAE4 #E6F5C9 #FFF2AE #F1E2CC #CCCCCC"],
  [227,"Rpk{RColorBrewer}","Set1","#E41A1C #377EB8 #4DAF4A #984EA3 #FF7F00 #FFFF33 #A65628 #F781BF #999999"],
  [228,"Rpk{RColorBrewer}","Set2","#66C2A5 #FC8D62 #8DA0CB #E78AC3 #A6D854 #FFD92F #E5C494 #B3B3B3"],
  [229,"Rpk{RColorBrewer}","Set3","#8DD3C7 #FFFFB3 #BEBADA #FB8072 #80B1D3 #FDB462 #B3DE69 #FCCDE5 #D9D9D9 #BC80BD #CCEBC5 #FFED6F"]
];

const PALETTES = RAW_PALETTES.map(([id, source, name, hex]) => ({ id, source, name, colors: hex.split(" ") }));
const PALETTES_BY_ID = new Map(PALETTES.map((palette) => [palette.id, palette]));

(() => {
  const $ = (id) => document.getElementById(id);
  const STORAGE_KEY = "palette-library.favorites.v1";
  const LANGUAGE_KEY = "color-database.language.v1";
  const THEME_KEY = "color-database.theme.v1";
  const COLOR_PAGE_SIZE = 10;
  const PREVIEW_COLOR_LIMIT = 16;
  const sourceCounts = new Map();
  PALETTES.forEach(({ source }) => sourceCounts.set(source, (sourceCounts.get(source) || 0) + 1));
  const translations = {
    zh: {
      skip: "跳到配色方案", viewLabel: "配色分类", all: "全部", favorites: "收藏",
      languageLabel: "界面语言", themeLabel: "外观", lightLabel: "浅色模式", darkLabel: "深色模式",
      search: "搜索编号、名称、来源或 HEX", countFilterLabel: "颜色数量", allCounts: "全部色数",
      sourceFilterLabel: "来源", allSources: "全部来源", zhihuSource: "知乎", moreColors: "另有 {count} 色",
      palettesLabel: "配色方案", clearFilters: "清除筛选", browseAll: "查看全部配色", palette: "配色 {id}",
      colorCount: "{count} 色", resultCount: "{count} 组", allPalettes: "全部配色", previewPalette: "预览 {name}，{count} 色",
      invalidValue: "无效原始色值", invalidWarning: "原始数据含无效色值", invalidBadge: "含无效值",
      emptyFavorites: "暂无收藏", emptyResults: "没有找到配色", emptyFavoritesHelp: "点击色卡上的爱心即可收藏。", emptyResultsHelp: "试试其他关键词或筛选条件。",
      addFavorite: "收藏", removeFavorite: "取消收藏", favoriteAdded: "已收藏", favoriteRemoved: "已取消收藏", favoriteSession: "收藏已临时保留，浏览器无法持久保存",
      copyAll: "复制全部", copyAllLabel: "复制全部 {count} 色", copiedAll: "已复制全部 {count} 色", copiedColor: "已复制 {hex}",
      copyColor: "复制第 {index} 色：{hex}", invalidOriginalNote: "原始色值 {values} 无效；预览使用灰色占位，复制保留原文。",
      closePreview: "关闭预览", colors: "颜色", copyTitle: "复制色值", closeCopy: "关闭复制窗口",
      previewLimit: "图表使用前 {used} 色，完整方案共 {total} 色。", previousColors: "上一页颜色", nextColors: "下一页颜色", colorPage: "第 {page} 页，共 {pages} 页",
      opacity: "不透明度", opacityValue: "{value}% 不透明度",
      copyHelp: "无法自动复制。请手动复制已选中的文本。", copyValues: "待复制的色值", selectAll: "全选"
    },
    en: {
      skip: "Skip to palettes", viewLabel: "Palette collection", all: "All", favorites: "Favorites",
      languageLabel: "Interface language", themeLabel: "Appearance", lightLabel: "Light mode", darkLabel: "Dark mode",
      search: "Search ID, name, source or HEX", countFilterLabel: "Number of colors", allCounts: "All counts",
      sourceFilterLabel: "Source", allSources: "All sources", zhihuSource: "Zhihu", moreColors: "{count} more colors",
      palettesLabel: "Palettes", clearFilters: "Clear filters", browseAll: "Browse all palettes", palette: "Palette {id}",
      colorCount: "{count} colors", resultCount: "{count} palettes", allPalettes: "All palettes", previewPalette: "Preview {name}, {count} colors",
      invalidValue: "Invalid original value", invalidWarning: "Contains an invalid original color value", invalidBadge: "Invalid value",
      emptyFavorites: "No favorites yet", emptyResults: "No palettes found", emptyFavoritesHelp: "Click the heart on a palette to save it.", emptyResultsHelp: "Try another keyword or filter.",
      addFavorite: "Add favorite", removeFavorite: "Remove favorite", favoriteAdded: "Added to favorites", favoriteRemoved: "Removed from favorites", favoriteSession: "Saved for this session only",
      copyAll: "Copy all", copyAllLabel: "Copy all {count} colors", copiedAll: "Copied all {count} colors", copiedColor: "Copied {hex}",
      copyColor: "Copy color {index}: {hex}", invalidOriginalNote: "Invalid original value {values}; shown in gray and copied unchanged.",
      closePreview: "Close preview", colors: "Colors", copyTitle: "Copy colors", closeCopy: "Close copy window",
      previewLimit: "Charts use the first {used} of {total} colors.", previousColors: "Previous colors", nextColors: "Next colors", colorPage: "Page {page} of {pages}",
      opacity: "Opacity", opacityValue: "{value}% opacity",
      copyHelp: "Automatic copying is unavailable. Please copy the selected text manually.", copyValues: "Color values to copy", selectAll: "Select all"
    }
  };
  function readPreference(key) {
    try { return localStorage.getItem(key); } catch { return null; }
  }
  function savePreference(key, value) {
    try { localStorage.setItem(key, value); return true; } catch { return false; }
  }
  const savedLanguage = readPreference(LANGUAGE_KEY);
  const savedTheme = readPreference(THEME_KEY);
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  let hasThemePreference = savedTheme === "light" || savedTheme === "dark";
  const state = {
    view: "all", query: "", count: "all", source: "all", selected: null, lastFocus: null, colorPage: 0, opacity: 100,
    language: savedLanguage === "en" ? "en" : "zh",
    theme: hasThemePreference ? savedTheme : systemTheme.matches ? "dark" : "light"
  };
  const t = (key, values = {}) => (translations[state.language][key] || key).replace(/\{(\w+)\}/g, (match, name) => values[name] ?? match);
  const validColor = (hex) => /^#[0-9a-f]{6}$/i.test(hex);
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  const icon = (name) => `<svg class="icon" aria-hidden="true"><use href="#icon-${name}"/></svg>`;
  const displayName = (palette) => palette.name === "nameless" ? t("palette", { id: numberLabel(palette.id) }) : palette.name;
  const numberLabel = (id) => `#${String(id).padStart(3, "0")}`;
  const sourceLabel = (source) => source === "zhihu" ? t("zhihuSource") : source.replace(/^Rpk\{(.+)\}$/, "$1");
  const grid = $("palette-grid");
  const detailDialog = $("palette-dialog");
  const copyDialog = $("copy-dialog");
  const toast = $("toast");
  let toastTimer;
  let previewKey;
  let favorites = new Set();

  try {
    const saved = JSON.parse(readPreference(STORAGE_KEY) || "[]");
    if (Array.isArray(saved)) favorites = new Set(saved.filter((id) => PALETTES_BY_ID.has(id)));
  } catch { /* Ignore malformed saved favorites. */ }

  const searchable = PALETTES.map((palette) => ({
    palette,
    text: `配色 palette ${numberLabel(palette.id)} ${palette.name} ${palette.source} ${palette.source === "zhihu" ? "知乎" : ""} ${palette.colors.join(" ")}`.toLowerCase()
  }));

  function updateSegments(id, selector, dataName, value, values) {
    const control = $(id);
    if (!control) return;
    control.style.setProperty("--segment-index", String(values.indexOf(value)));
    control.querySelectorAll(selector).forEach((button) => {
      const active = button.dataset[dataName] === value;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function applyTheme() {
    document.documentElement.dataset.theme = state.theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", state.theme === "dark" ? "#141517" : "#fafafa");
    updateSegments("theme-control", "[data-theme-choice]", "themeChoice", state.theme, ["light", "dark"]);
  }

  function applyTranslations() {
    document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
    [detailDialog, copyDialog].forEach((dialog) => { dialog.lang = document.documentElement.lang; });
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      if (translations[state.language][element.dataset.i18n]) element.textContent = t(element.dataset.i18n);
    });
    [["data-i18n-placeholder", "placeholder"], ["data-i18n-label", "aria-label"], ["data-i18n-title", "title"]].forEach(([source, target]) => {
      document.querySelectorAll(`[${source}]`).forEach((element) => {
        const key = element.getAttribute(source);
        if (translations[state.language][key]) element.setAttribute(target, t(key));
      });
    });
    const filter = $("count-filter");
    filter.innerHTML = `<option value="all">${t("allCounts")}</option>` + counts.map((count) => `<option value="${count}">${t("colorCount", { count })}</option>`).join("");
    filter.value = state.count;
    const sourceFilter = $("source-filter");
    sourceFilter.innerHTML = `<option value="all">${t("allSources")}</option>` + [...sourceCounts].map(([source, count]) => `<option value="${escapeHTML(source)}">${escapeHTML(sourceLabel(source))} (${count})</option>`).join("");
    sourceFilter.value = state.source;
    setPreviewOpacity(state.opacity);
    updateSegments("language-control", "[data-language]", "language", state.language, ["zh", "en"]);
    renderGallery();
    if (detailDialog.open) { renderSelectedDetails(); renderPreview(); }
  }

  function setLanguage(language) {
    if (!Object.hasOwn(translations, language) || state.language === language) return;
    state.language = language;
    savePreference(LANGUAGE_KEY, language);
    applyTranslations();
  }

  function setTheme(theme) {
    if (theme !== "light" && theme !== "dark") return;
    hasThemePreference = true;
    state.theme = theme;
    savePreference(THEME_KEY, theme);
    applyTheme();
  }

  function bindSegments(id, selector, dataName, callback) {
    const control = $(id);
    if (!control) return;
    control.addEventListener("click", (event) => {
      const button = event.target.closest(selector);
      if (button && control.contains(button)) callback(button.dataset[dataName]);
    });
  }

  function filteredPalettes() {
    const query = state.query.trim().toLowerCase();
    const exactID = /^#?\d{1,3}$/.test(query) ? Number(query.replace("#", "")) : null;
    const terms = query.split(/\s+/).filter(Boolean);
    return searchable.filter(({ palette, text }) =>
      (state.view === "all" || favorites.has(palette.id)) &&
      (state.count === "all" || palette.colors.length === Number(state.count)) &&
      (state.source === "all" || palette.source === state.source) &&
      (exactID !== null ? palette.id === exactID : terms.every((term) => text.includes(term)))
    ).map(({ palette }) => palette);
  }

  function renderGallery() {
    const visible = filteredPalettes();
    grid.innerHTML = visible.map((palette) => {
      const name = escapeHTML(displayName(palette));
      const isFavorite = favorites.has(palette.id);
      const invalid = palette.colors.some((hex) => !validColor(hex));
      const band = palette.colors.slice(0, COLOR_PAGE_SIZE).map((hex) => `<span class="${validColor(hex) ? "" : "invalid-swatch"}" style="--swatch:${validColor(hex) ? hex : "#ccc"}" title="${escapeHTML(hex)}${validColor(hex) ? "" : ` (${t("invalidValue")})`}"></span>`).join("")
        + (palette.colors.length > COLOR_PAGE_SIZE ? `<span class="card-more" title="${t("moreColors", { count: palette.colors.length - COLOR_PAGE_SIZE })}">+${palette.colors.length - COLOR_PAGE_SIZE}</span>` : "");
      return `<article class="palette-card" role="listitem" data-id="${palette.id}">
        <button class="card-open" type="button" data-open="${palette.id}" aria-label="${escapeHTML(t("previewPalette", { name: displayName(palette), count: palette.colors.length }))}">
          <span class="card-band" aria-hidden="true">${band}</span>
          <span class="card-info"><span class="card-title-row"><span class="card-title">${name}</span>${palette.name === "nameless" ? "" : `<span class="card-id">${numberLabel(palette.id)}</span>`}</span>
          <span class="card-meta"><span>${t("colorCount", { count: palette.colors.length })}</span>${invalid ? `<span class="card-warning" title="${t("invalidWarning")}">${icon("info")}${t("invalidBadge")}</span>` : ""}</span></span>
        </button>
        <button class="card-favorite favorite-button" type="button" data-favorite="${palette.id}" aria-label="${t(isFavorite ? "removeFavorite" : "addFavorite")} ${name}" aria-pressed="${isFavorite}">${icon("heart")}</button>
      </article>`;
    }).join("");
    $("results-summary").innerHTML = `<strong>${t(state.view === "favorites" ? "favorites" : "allPalettes")}</strong><span>${t("resultCount", { count: visible.length })}</span>`;
    $("favorites-count").textContent = favorites.size;
    $("reset-filters").hidden = !state.query && state.count === "all" && state.source === "all";
    $("empty-state").hidden = visible.length !== 0;
    const emptyFavorites = state.view === "favorites" && favorites.size === 0;
    $("empty-title").textContent = t(emptyFavorites ? "emptyFavorites" : "emptyResults");
    $("empty-description").textContent = t(emptyFavorites ? "emptyFavoritesHelp" : "emptyResultsHelp");
    updateSegments("view-control", "[data-view]", "view", state.view, ["all", "favorites"]);
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    (copyDialog.open ? copyDialog : detailDialog.open ? detailDialog : document.body).append(toast);
    toast.querySelector("span").textContent = message;
    toast.classList.add("is-visible");
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  function toggleFavorite(id) {
    if (!PALETTES_BY_ID.has(id)) return;
    if (favorites.has(id)) favorites.delete(id);
    else favorites.add(id);
    const persisted = savePreference(STORAGE_KEY, JSON.stringify([...favorites]));
    if (state.view === "favorites") {
      const oldButtons = [...grid.querySelectorAll(".card-favorite")];
      const oldIndex = oldButtons.findIndex((button) => Number(button.dataset.favorite) === id);
      const hadFocus = !detailDialog.open && oldButtons[oldIndex] === document.activeElement;
      renderGallery();
      if (hadFocus) {
        const buttons = grid.querySelectorAll(".card-favorite");
        (buttons[Math.min(oldIndex, buttons.length - 1)] || $("empty-reset")).focus({ preventScroll: true });
      }
    }
    syncFavoriteButtons(id);
    $("favorites-count").textContent = favorites.size;
    showToast(t(persisted ? (favorites.has(id) ? "favoriteAdded" : "favoriteRemoved") : "favoriteSession"));
  }

  function syncFavoriteButtons(id) {
    const palette = PALETTES_BY_ID.get(id);
    const active = favorites.has(id);
    document.querySelectorAll(`[data-favorite="${id}"]`).forEach((button) => {
      button.setAttribute("aria-pressed", String(active));
      button.setAttribute("aria-label", `${t(active ? "removeFavorite" : "addFavorite")}: ${displayName(palette)}`);
    });
  }

  async function copyText(text, message) {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(text);
      showToast(message);
    } catch {
      $("copy-text").value = text;
      if (!copyDialog.open) copyDialog.showModal();
      document.body.classList.add("has-dialog");
      $("copy-text").focus();
      $("copy-text").select();
    }
  }

  function openPalette(id, trigger) {
    const palette = PALETTES_BY_ID.get(id);
    if (!palette) return;
    state.selected = palette;
    state.colorPage = 0;
    state.lastFocus = trigger || document.activeElement;
    renderSelectedDetails();
    if (!detailDialog.open) detailDialog.showModal();
    document.body.classList.add("has-dialog");
    renderPreview();
    $("close-detail").focus({ preventScroll: true });
  }

  function renderSelectedDetails() {
    const palette = state.selected;
    if (!palette) return;
    const previewName = displayName(palette);
    $("detail-title").textContent = previewName;
    $("detail-title").title = previewName;
    $("detail-id").textContent = numberLabel(palette.id);
    $("detail-id").hidden = palette.name === "nameless";
    $("copy-palette").querySelector("span").textContent = t("copyAll");
    $("copy-palette").setAttribute("aria-label", t("copyAllLabel", { count: palette.colors.length }));
    $("copy-palette").title = t("copyAllLabel", { count: palette.colors.length });
    $("detail-color-count").textContent = palette.colors.length;
    $("detail-favorite").dataset.favorite = palette.id;
    syncFavoriteButtons(palette.id);
    const invalidColors = palette.colors.filter((hex) => !validColor(hex));
    $("invalid-warning").hidden = invalidColors.length === 0;
    $("invalid-warning").textContent = t("invalidOriginalNote", { values: invalidColors.join(", ") });
    $("preview-limit-note").hidden = palette.colors.length <= PREVIEW_COLOR_LIMIT;
    $("preview-limit-note").textContent = t("previewLimit", { used: PREVIEW_COLOR_LIMIT, total: palette.colors.length });
    $("all-colors").classList.toggle("has-multiple-rows", palette.colors.length > 5);
    $("all-colors").style.setProperty("--compact-color-rows", String(Math.ceil(Math.min(palette.colors.length, COLOR_PAGE_SIZE) / 2)));
    renderColorPage();
  }

  function renderColorPage() {
    const palette = state.selected;
    if (!palette) return;
    const focusedColor = document.activeElement?.closest("#detail-color-grid [data-copy-index]")?.dataset.copyIndex;
    const pages = Math.ceil(palette.colors.length / COLOR_PAGE_SIZE);
    state.colorPage = Math.max(0, Math.min(pages - 1, state.colorPage));
    const start = state.colorPage * COLOR_PAGE_SIZE;
    $("detail-color-grid").innerHTML = palette.colors.slice(start, start + COLOR_PAGE_SIZE).map((hex, offset) => {
      const index = start + offset;
      const valid = validColor(hex);
      return `<button class="color-chip" type="button" data-copy-index="${index}" aria-label="${escapeHTML(t("copyColor", { index: index + 1, hex }))}${valid ? "" : ` (${t("invalidValue")})`}" title="${escapeHTML(hex)}${valid ? "" : ` (${t("invalidValue")})`}"><span class="chip-swatch ${valid ? "" : "invalid-swatch"}" style="--swatch:${valid ? hex : "#ccc"}"></span><span class="chip-hex">${escapeHTML(hex)}</span></button>`;
    }).join("");
    $("color-pagination").hidden = pages === 1;
    $("color-page-status").textContent = `${state.colorPage + 1} / ${pages}`;
    $("color-page-status").setAttribute("aria-label", t("colorPage", { page: state.colorPage + 1, pages }));
    $("previous-colors").disabled = state.colorPage === 0;
    $("next-colors").disabled = state.colorPage === pages - 1;
    if (focusedColor !== undefined) $("detail-color-grid").querySelector(`[data-copy-index="${focusedColor}"]`)?.focus({ preventScroll: true });
  }

  function setColorPage(page) {
    if (!state.selected) return;
    state.colorPage = page;
    renderColorPage();
  }

  function setPreviewOpacity(value) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) return;
    state.opacity = Math.max(0, Math.min(100, Math.round(numeric)));
    detailDialog.style.setProperty("--preview-opacity", String(state.opacity / 100));
    detailDialog.style.setProperty("--opacity-progress", `${state.opacity}%`);
    $("preview-opacity").value = String(state.opacity);
    $("preview-opacity").setAttribute("aria-valuetext", t("opacityValue", { value: state.opacity }));
    $("opacity-value").textContent = `${state.opacity}%`;
  }

  function renderPreview() {
    if (!state.selected || !detailDialog.open) return;
    const width = fitPreviewGrid();
    const key = `${state.selected.id}:${width}`;
    if (key === previewKey) return;
    // Fit 4:3 canvases inside the available window without stretching the charts.
    ["bar", "density", "scatter", "line"].forEach((kind) => {
      $(`chart-${kind}`).innerHTML = chartSVG(kind, state.selected.colors.slice(0, PREVIEW_COLOR_LIMIT), width);
    });
    previewKey = key;
  }

  function fitPreviewGrid() {
    const content = detailDialog.querySelector(".detail-content");
    const grid = detailDialog.querySelector(".chart-grid");
    const contentStyle = getComputedStyle(content);
    const gridStyle = getComputedStyle(grid);
    const paddingX = parseFloat(contentStyle.paddingLeft) + parseFloat(contentStyle.paddingRight);
    const paddingY = parseFloat(contentStyle.paddingTop) + parseFloat(contentStyle.paddingBottom);
    const sidebarWidth = parseFloat(contentStyle.getPropertyValue("--preview-sidebar")) || 0;
    const headerHeight = detailDialog.querySelector(".detail-header").getBoundingClientRect().height;
    const siblings = [...content.children].filter((element) => element !== grid && !element.hidden);
    const fixedHeight = headerHeight + paddingY + (sidebarWidth ? 0
      : siblings.reduce((sum, element) => sum + element.getBoundingClientRect().height, 0)
        + siblings.length * parseFloat(contentStyle.rowGap));
    const maxHeight = parseFloat(getComputedStyle(detailDialog).maxHeight);
    const caption = grid.querySelector("figcaption");
    const captionHeight = caption.getBoundingClientRect().height + parseFloat(getComputedStyle(caption).marginBottom);
    const gapX = parseFloat(gridStyle.columnGap), gapY = parseFloat(gridStyle.rowGap);
    const chartWidth = Math.max(1, Math.min(
      (content.clientWidth - paddingX - gapX - sidebarWidth - (sidebarWidth ? parseFloat(contentStyle.columnGap) : 0)) / 2,
      ((maxHeight - fixedHeight - gapY) / 2 - captionHeight) * 4 / 3
    ));
    const gridHeight = (chartWidth * 3 / 4 + captionHeight) * 2 + gapY;
    grid.style.width = `${chartWidth * 2 + gapX}px`;
    grid.style.height = `${gridHeight}px`;
    detailDialog.style.height = `${sidebarWidth ? maxHeight : Math.ceil(fixedHeight + gridHeight)}px`;
    return chartWidth;
  }

  // Seeded demo data is created once. Palette selection never changes the observations.
  function randomSource(seed) {
    return () => {
      seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
      return seed / 4294967296;
    };
  }

  const BAR_VALUES = [8.65, 7.2, 8.18, 9.85, 8.4, 7.7, 9.1, 8.6, 7.4, 9.3];
  const DEMO = Array.from({ length: PREVIEW_COLOR_LIMIT }, (_, index) => {
    const random = randomSource(9173 + index * 71);
    // Keep the same 28 draws so the other charts retain their sample data.
    const uniforms = Array.from({ length: 28 }, () => random());
    const densitySamples = uniforms.map((_, point) => {
      const pair = Math.floor(point / 2) * 2;
      const radius = Math.sqrt(-2 * Math.log(1 - uniforms[pair]));
      const angle = 2 * Math.PI * uniforms[pair + 1];
      const normal = radius * (point % 2 ? Math.sin(angle) : Math.cos(angle));
      return 3 + (index % 6) * .65 + (index >= 6 ? .15 : 0) + (.65 + index % 4 * .16) * normal;
    });
    const scatter = Array.from({ length: 26 }, () => [0.01 + random() * 0.98, index * .35 + (random() - .5) * .58]);
    const line = Array.from({ length: 20 }, (_, point) => [point + 1, Math.sin(point * 1.3 + index) * .15 + (random() - .5) * .75]);
    return { mean: BAR_VALUES[index] ?? 7 + random() * 3, densitySamples, scatter, line };
  });
  const DENSITY_BANDWIDTH = .45;
  const densitySamples = DEMO.flatMap((demo) => demo.densitySamples);
  const DENSITY_DOMAIN = [Math.floor(Math.min(...densitySamples) - 3 * DENSITY_BANDWIDTH), Math.ceil(Math.max(...densitySamples) + 3 * DENSITY_BANDWIDTH)];
  DEMO.forEach((demo) => {
    demo.density = Array.from({ length: 97 }, (_, point) => {
      const value = DENSITY_DOMAIN[0] + point / 96 * (DENSITY_DOMAIN[1] - DENSITY_DOMAIN[0]);
      const density = demo.densitySamples.reduce((sum, sample) => sum + Math.exp(-.5 * ((value - sample) / DENSITY_BANDWIDTH) ** 2), 0)
        / (demo.densitySamples.length * DENSITY_BANDWIDTH * Math.sqrt(2 * Math.PI));
      return [value, density];
    });
  });
  const DENSITY_SCALES = DEMO.map((_, index) => {
    const curves = DEMO.slice(0, index + 1).map((demo) => demo.density);
    const visible = curves.flatMap((curve) => {
      const peak = Math.max(...curve.map((point) => point[1]));
      return curve.filter((point) => point[1] >= peak * .02);
    });
    const step = (DENSITY_DOMAIN[1] - DENSITY_DOMAIN[0]) / 96;
    return {
      minX: Math.max(DENSITY_DOMAIN[0], Math.floor((Math.min(...visible.map((point) => point[0])) - step) * 2) / 2),
      maxX: Math.min(DENSITY_DOMAIN[1], Math.ceil((Math.max(...visible.map((point) => point[0])) + step) * 2) / 2),
      maxY: Math.ceil(Math.max(...curves.flatMap((curve) => curve.map((point) => point[1]))) * 1.04 * 100) / 100
    };
  });

  function chartSVG(kind, colors, width) {
    const height = width * 3 / 4;
    const narrow = width < 220;
    const left = narrow ? 28 : 34, right = narrow ? 12 : 14, top = 6, bottom = narrow ? 20 : 22;
    const fontSize = narrow ? 9 : 10.5;
    const plotWidth = width - left - right, plotHeight = height - top - bottom;
    const count = colors.length;
    const densityScale = DENSITY_SCALES[count - 1];
    const ymin = kind === "scatter" ? -.35 : kind === "line" ? .2 : 0;
    const ymax = kind === "density" ? densityScale.maxY : kind === "scatter" ? (count - 1) * .35 + .4 : kind === "line" ? Math.max(4, count) + .65 : 10.3;
    const y = (value) => top + plotHeight - (value - ymin) / (ymax - ymin) * plotHeight;
    const f = (number) => Number(number.toFixed(2));
    const groupX = (index) => left + (index + .5) * plotWidth / count;
    const x = (value) => left + (kind === "density" ? (value - densityScale.minX) / (densityScale.maxX - densityScale.minX) : kind === "scatter" ? value : (value - 1) / 19) * plotWidth;
    const paint = (hex) => validColor(hex) ? hex : `url(#invalid-${kind})`;
    const safeStroke = (hex) => validColor(hex) ? hex : "#999";
    const title = (index, hex) => `Group ${String.fromCharCode(97 + index)} · ${escapeHTML(hex)}${validColor(hex) ? "" : " (invalid original value, gray placeholder)"}`;
    let axes = "";
    const lineTickMax = Math.max(4, count);
    const scatterStep = count <= 5 ? .5 : count <= 9 ? 1 : 2;
    const yTicks = kind === "bar" ? [0, 2.5, 5, 7.5, 10] : kind === "density" ? Array.from({ length: 5 }, (_, i) => i * ymax / 4) : kind === "line" ? Array.from({ length: Math.min(lineTickMax, 5) }, (_, i) => Math.round((i + 1) * lineTickMax / Math.min(lineTickMax, 5))) : Array.from({ length: Math.floor(ymax / scatterStep) + 1 }, (_, i) => i * scatterStep);
    for (const value of yTicks) {
      axes += `<path d="M${left - 3} ${f(y(value))}h3" stroke="var(--chart-axis, #555)"/><text x="${left - 6}" y="${f(y(value) + 3)}" text-anchor="end">${kind === "bar" || kind === "scatter" ? value.toFixed(1) : f(value)}</text>`;
    }
    axes += `<rect x="${left}" y="${top}" width="${plotWidth}" height="${plotHeight}" stroke="var(--chart-axis, #555)" stroke-width=".8" fill="none"/>`;
    if (kind === "bar") {
      const labelStep = Math.ceil(count / Math.max(1, Math.floor(plotWidth / 12)));
      colors.forEach((hex, index) => { if (index % labelStep === 0) axes += `<path d="M${f(groupX(index))} ${height - bottom}v3" stroke="var(--chart-axis, #555)"/><text x="${f(groupX(index))}" y="${height - 6}" text-anchor="middle">${String.fromCharCode(97 + index)}</text>`; });
    } else {
      const densityTickCount = width < 180 ? 3 : 5;
      const ticks = kind === "density" ? Array.from({ length: densityTickCount }, (_, i) => f(densityScale.minX + i / (densityTickCount - 1) * (densityScale.maxX - densityScale.minX))) : kind === "scatter" ? width < 180 ? [0, .5, 1] : [0, .25, .5, .75, 1] : width < 180 ? [5, 10, 20] : [5, 10, 15, 20];
      ticks.forEach((value) => { axes += `<path d="M${f(x(value))} ${height - bottom}v3" stroke="var(--chart-axis, #555)"/><text x="${f(x(value))}" y="${height - 6}" text-anchor="middle">${kind === "scatter" ? value.toFixed(2) : value}</text>`; });
    }
    const shapes = colors.map((hex, index) => {
      const demo = DEMO[index];
      const label = `<title>${title(index, hex)}</title>`;
      const common = `data-series="${index}" data-color="${escapeHTML(hex)}"${validColor(hex) ? "" : ' data-invalid="true"'}`;
      if (kind === "bar") {
        const barWidth = plotWidth / count * .9;
        return `<rect class="chart-mark" ${common} x="${f(groupX(index) - barWidth / 2)}" y="${f(y(demo.mean))}" width="${f(barWidth)}" height="${f(y(0) - y(demo.mean))}" fill="${paint(hex)}" stroke="var(--chart-outline, #222)" stroke-width="1.2">${label}</rect>`;
      }
      if (kind === "density") {
        const curve = demo.density.map(([value, density], point) => `${point ? "L" : "M"}${f(x(value))} ${f(y(density))}`).join(" ");
        const area = `${curve} L${f(x(DENSITY_DOMAIN[1]))} ${f(y(0))} L${f(x(DENSITY_DOMAIN[0]))} ${f(y(0))}Z`;
        return `<g class="chart-mark" ${common}>${label}<path d="${area}" fill="${paint(hex)}" fill-opacity=".24"/><path d="${curve}" fill="none" stroke="${safeStroke(hex)}" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round"${validColor(hex) ? "" : ' stroke-dasharray="4 3"'}/></g>`;
      }
      if (kind === "scatter") {
        return `<g ${common}>${label}${demo.scatter.map(([a, b]) => `<circle class="chart-mark" cx="${f(x(a))}" cy="${f(y(b))}" r="${narrow ? 2.4 : 3}" fill="${safeStroke(hex)}" stroke="none"/>`).join("")}</g>`;
      }
      const path = demo.line.map(([a, b], point) => `${point === 0 ? "M" : "L"}${f(x(a))} ${f(y((index < 4 ? 4 - index : index + 1) + b))}`).join(" ");
      return `<path class="chart-mark" ${common} d="${path}" fill="none" stroke="${safeStroke(hex)}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"${validColor(hex) ? "" : ' stroke-dasharray="4 3"'}>${label}</path>`;
    }).join("");
    const names = { bar: "Bar chart", density: "Overlapping density plot", scatter: "Scatterplot", line: "Line chart" };
    const invalidPattern = (kind === "bar" || kind === "density") && colors.some((hex) => !validColor(hex))
      ? `<pattern id="invalid-${kind}" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="8" height="8" fill="#ccc"/><path d="M0 0V8" stroke="#eee" stroke-width="4"/></pattern>` : "";
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" style="--chart-font:${fontSize}px" role="img" aria-label="${names[kind]}, ${count} groups of fixed sample data" data-series-count="${count}"><defs><clipPath id="clip-${kind}"><rect x="${left}" y="${top}" width="${plotWidth}" height="${plotHeight}"/></clipPath>${invalidPattern}</defs>${axes}<g clip-path="url(#clip-${kind})">${shapes}</g></svg>`;
  }

  const counts = [...new Set(PALETTES.map((palette) => palette.colors.length))].sort((a, b) => a - b);
  $("search-input").addEventListener("input", (event) => { state.query = event.target.value; renderGallery(); });
  $("count-filter").addEventListener("change", (event) => { state.count = event.target.value; renderGallery(); });
  $("source-filter").addEventListener("change", (event) => { state.source = event.target.value; renderGallery(); });
  $("preview-opacity").addEventListener("input", (event) => setPreviewOpacity(event.target.value));
  $("previous-colors").addEventListener("click", () => setColorPage(state.colorPage - 1));
  $("next-colors").addEventListener("click", () => setColorPage(state.colorPage + 1));
  function resetFilters() {
    state.query = ""; state.count = "all"; state.source = "all";
    $("search-input").value = ""; $("count-filter").value = "all"; $("source-filter").value = "all";
    renderGallery();
  }
  $("reset-filters").addEventListener("click", () => { resetFilters(); $("search-input").focus(); });
  $("empty-reset").addEventListener("click", () => { state.view = "all"; resetFilters(); $("search-input").focus(); });
  grid.addEventListener("click", (event) => {
    const favorite = event.target.closest("[data-favorite]");
    const open = event.target.closest("[data-open]");
    if (favorite) toggleFavorite(Number(favorite.dataset.favorite));
    else if (open) openPalette(Number(open.dataset.open), open);
  });
  $("detail-favorite").addEventListener("click", () => { if (state.selected) toggleFavorite(state.selected.id); });
  $("copy-palette").addEventListener("click", () => { if (state.selected) copyText(state.selected.colors.join(", "), t("copiedAll", { count: state.selected.colors.length })); });
  function handleColorCopy(event) {
    const chip = event.target.closest("[data-copy-index]");
    if (chip && state.selected) { const hex = state.selected.colors[Number(chip.dataset.copyIndex)]; copyText(hex, t("copiedColor", { hex })); }
  }
  $("detail-color-grid").addEventListener("click", handleColorCopy);
  $("close-detail").addEventListener("click", () => detailDialog.close());
  $("close-copy").addEventListener("click", () => copyDialog.close());
  $("select-copy").addEventListener("click", () => { $("copy-text").focus(); $("copy-text").select(); });
  [detailDialog, copyDialog].forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    dialog.addEventListener("close", () => {
      document.body.classList.toggle("has-dialog", detailDialog.open || copyDialog.open);
      (copyDialog.open ? copyDialog : detailDialog.open ? detailDialog : document.body).append(toast);
      if (dialog === detailDialog) {
        const fallback = grid.querySelector(`[data-open="${state.selected?.id}"]`) || $("search-input");
        (state.lastFocus?.isConnected ? state.lastFocus : fallback).focus({ preventScroll: true });
      }
    });
  });
  const previewObserver = new ResizeObserver(() => { if (detailDialog.open) renderPreview(); });
  previewObserver.observe(detailDialog.querySelector(".detail-content"));
  bindSegments("language-control", "[data-language]", "language", setLanguage);
  bindSegments("theme-control", "[data-theme-choice]", "themeChoice", setTheme);
  bindSegments("view-control", "[data-view]", "view", (view) => { state.view = view; renderGallery(); });
  systemTheme.addEventListener("change", () => {
    if (!hasThemePreference) { state.theme = systemTheme.matches ? "dark" : "light"; applyTheme(); }
  });
  applyTheme();
  applyTranslations();
})();
