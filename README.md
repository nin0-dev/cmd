# cmd

A pretty basic argument parser

https://jsr.io/@nin0/cmd

## Usage

Use the `parseArgs` function:

```js
parseArgs(`!ban @nin0.dev --reason "annoying" -p`, {
	prefix: "!",
	positionalArgumentName: "user"
});
```

and you'll get:

```js
{
    commandName: "ban",
    args: {
        p: "true",
        reason: "annoying",
        user: "@nin0.dev"
    }
}
```

## Supported argument forms

```
Flags
-p
--permanent

Short form, strings
-r "annoying"
-r 'annoying'
-r annoying (can be used with one word values)

Long form, strings
--reason "annoying"
--reason="annoying"
--reason 'annoying'
--reason='annoying'
--reason annoying (can be used with one word values)
--reason=annoying (can be used with one word values)
```
