console.log(`Зараз така дата та час: ${new Date().toLocaleString('uk-UA', {timezone: "Europe/Kiev",
                                                                           weekday:  "long", 
                                                                           year:     "numeric", 
                                                                           month:    "long",
                                                                           day:      "numeric",
                                                                           hour:     "numeric",
                                                                           minute:   "numeric", })}`);