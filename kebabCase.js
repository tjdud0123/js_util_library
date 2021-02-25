 kebabCase: function (str) {
        var simplexWords = stringUtil.toSimplexWords(str);
        var joinedWord = stringUtil.joinWithKebab(simplexWords);
        return stringUtil.firstToLower(joinedWord);
    },
      
      toSimplexWords: function (str) {
		var onlyAlnum = strUtil.toAlnum(str);
		var spacedWords = strUtil.numberWithBlank(strUtil.capitalWithBlank(onlyAlnum));
		return spacedWords.split(' ').filter(function (word) {
			return word !== '';
		});
	},
    
    	joinWithKebab: function (strArr) {
		return strArr.map(function (str) {
			return str.toLowerCase();
		}).join('-');
	},
    
    	toAlnum: function (str) {
		return str.replace(/[^A-Za-z0-9]/g, ' ');
	},
    
    	capitalWithBlank: function (str) {
		return str.replace(/([A-Z][a-z]+)/g, " $1 ");
	},
    
    	numberWithBlank: function (str) {
		return str.replace(/([0-9]+)/g, " $1 ");
	},
