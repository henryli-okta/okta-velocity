const products = [
	{
		id: '1',
		text: 'Okta VTL Variables',
		expanded: true,
		items: [
			{
				id: '1_1',
				text: 'user',
				key: 'user',
				expanded: true,
				items: [
					{
						id: '1_1_1',
						text: 'profile',
						key: 'user.profile',
						items: [
							{
								id: '1_1_1_1',
								text: 'login: user\'s email address',
								key: 'user.profile.login',
							}, 
							{
								id: '1_1_1_2',
								text: 'fullname: user name',
								key: 'user.profile.fullname',
							}
						]
					}
				]
			}, 
			{
				id: '1_2',
				text: 'brand',
				key: 'brand',
				items: [
					{
						id: '1_2_1',
						text: 'theme',
						key: 'brand.theme',
						items: [
							{
								id: '1_2_1_1',
								text: 'logo: email logo',
								key: 'brand.theme.logo',
							}, 
							{
								id: '1_2_1_2',
								text: 'primaryColor: primary color',
								key: 'brand.theme.primaryColor',
							}
						]
					}
				]
			}
		]
	}
];