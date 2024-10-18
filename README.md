## Server Configuration
- **Instance:** `t2.2xlarge`
- **vCPUs:** 8
- **Memory:** 32 GB

If you're deploying an application on EC2 using this instance, ensure that you configure resources and optimize `ffmpeg` usage to leverage the available hardware. Make sure ffmpeg is tuned for multi-threading to fully utilize the 8 vCPUs and ensure that the instance's 32 GB memory is effectively managed during video processing.

For more details on ffmpeg video conversion, refer to the repository below:

### Related GitHub Repository:
[h264-video-conversion-ffmpeg](https://github.com/ranjeetvit2012/h264-video-conversion-ffmpeg/blob/master/README.md)
