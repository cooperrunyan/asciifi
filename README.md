# Asciifi

## Installation

##### 

### Global installation

Note: Mac and Linux users need to preface the command with `sudo` for
permissions.

To install, run:

```bash
npm i -g asciifi
```

##### 

### Alternatively

If you only want to run it once, and not globally install the package, run:

```bash
npx asciifi -y
```

---

## Usage

```bash
asciifi ./test-img.png -b .75 -w 432
```

##### 

### Arguments

| Name&nbsp;&nbsp;&nbsp;&nbsp; | Command&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Input&nbsp;Type | Range&nbsp; | Default | Description                                                                                |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------- | ------- | ------------------------------------------------------------------------------------------ |
| Brightness                   | `-b`, `--brightness`                                                                                                      | `number`        | 0-1         | 0.8     | Set the brightness with a value between 0 and 1. Lower values have less detail.            |
| Width                        | `-w` `—width`                                                                                                             | `number`        | 0-1000      | 150     | Set the width of the outputted image. Higher widths will result in a higher quality image. |

---

## Inspiration

This most certainly has been done before, I am not taking credit for an original
idea. The inspiration came from a video posted by Fireship on YouTube in 2020.
He went over some cool app ideas, one of them being an ascii image converter. In
the video, he explained that anyone can use the app idea, as long as they
provide credit.

##### 

### Original Video

#### [7 Full Stack App Ideas for Developers w/ Instructions Included](https://www.youtube.com/watch?v=JTOJsU3FSD8)

[![7 Full Stack App Ideas for Developers w/ Instructions Included](https://img.youtube.com/vi/JTOJsU3FSD8/0.jpg)](https://www.youtube.com/watch?v=JTOJsU3FSD8)
